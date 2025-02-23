import express from "express";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { CreateUserSchema, SigninSchema, CreateRoomSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/client";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {

    const parsedata = CreateUserSchema.safeParse(req.body);
    if (!parsedata.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return
    }
    try {        
    const user = await prismaClient.user.create({
        data: {
            email: parsedata.data?.username,
            password: parsedata.data?.password,
            name: parsedata.data?.name
        }
    })
    res.json({
        userId: user.id
    })
    } catch (error) {
        res.status(411).json({
            message: "User already exists with this username"
        });        
    }
});

app.post("/signin", async (req, res) => {

    const parsedata = SigninSchema.safeParse(req.body);
    if (!parsedata.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return
    }

    const user = await prismaClient.user.findFirst({
        where: {
            email: parsedata.data.username,
            password: parsedata.data.password
        }
    })

    if(!user){
        res.status(403).json({
            message: "Not Autherized"
        })
        return;
    }
    const token = jwt.sign({
        userId: user?.id
    }, JWT_SECRET);

    res.json({
        token
    })
});

app.post("/room", middleware, async (req, res) => {

    const parsedata = CreateRoomSchema.safeParse(req.body);
    if (!parsedata.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return
    }
   // @ts-ignore
    const userId = req.userId;
    try {
        const room = await prismaClient.room.create({
            data: {
                slug: parsedata.data.name,
                adminId: userId
            }
        });    
        res.json({
            roomId: room.id
        })
    } catch (error) {
        res.status(411).json({
            message: "Room already exist with this name"
        })
    }
    
});

app.get("/chats/:roomId", async (req, res) => {
    try {
        const roomId = Number(req.params.roomId);
        const messages = await prismaClient.chat.findMany({
            where: {
                roomId: roomId
            },
            orderBy: {
                id: "desc"
            },
            take: 500
        });
    
        res.json({
            messages
        })
    } catch (error) {
        res.status(411).json({
            message: "Room already exist with this name"
        })
    }
});

app.get("/room/:slug", async (req, res) => {
    const slug = req.params.slug;
    const room = await prismaClient.room.findFirst({
        where: {
           slug
        }
    });

    res.json({
        room
    })
})



app.listen(3001);
