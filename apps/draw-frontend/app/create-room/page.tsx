"use client";
import { PencilRuler } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { HTTP_BACKEND } from "@/config";

export default function SigninPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
    });

    // Add check for authentication
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("Please login first");
            router.push("/signin");
        }
    }, [router]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const createRoom = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.name) {
            try {
                const token = localStorage.getItem("token");
                const data = {
                    name: formData.name,
                };
                
                // Add token to request headers
                const response = await axios.post(
                    `${HTTP_BACKEND}/room`, 
                    data,
                    {
                        headers: {
                            'Authorization': `${token}`
                        }
                    }
                );
                
                const roomId = response.data.roomId;
                toast.success("Room created successfully");
                router.push("/canvas/" + roomId);
            } catch (error: any) {
                if (error.response) {
                    if (error.response.status === 401) {
                        toast.error("Please login again");
                        router.push("/signin");
                    } else {
                        toast.error(error.response.data.message || "Failed to create room");
                    }
                } else {
                    toast.error("Unable to connect to server");
                }
                console.error(error);
            }
        } else {
            toast.error("Please enter a room name");
        }
    };

    return (
        <>
            <div className="bg-gradient-to-t from-indigo-900 to-white via-indigo-300 dark:from-gray-950 dark:to-indigo-900">
                <div className="absolute top-50 right-50 p-4 cursor-pointer">
                    <PencilRuler
                        className="h-8 w-auto text-indigo-600 dark:text-indigo-400"
                        onClick={() => {
                            router.push("/");
                        }}
                    />
                </div>
                <div className="flex min-h-screen items-center justify-center">
                    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-gray-800">
                                Create a room and collaborate
                            </h1>
                        </div>
                        <form className="mt-6" onSubmit={createRoom}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Enter room name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border text-zinc-800 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="My Awesome Room"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none sm:text-sm font-medium"
                                >
                                    Create room
                                </button>
                            </div>
                            <div className="text-center mt-4">
                                <p className="text-zinc-700">
                                    Want to join a room?{" "}
                                    <Link href="/join-room" className="underline">
                                        Join room
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}