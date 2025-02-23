import { useEffect, useRef, useState } from "react";
import { IconButton } from "./IconButton";
import { Circle, Pencil, RectangleHorizontalIcon, Eraser, Move } from "lucide-react";
import { Game } from "@/draw/Game";

export type Tool = "circle" | "rect" | "pencil" | "eraser" | "move";

export function Canvas({
    roomId,
    socket
}: {
    roomId: string;
    socket: WebSocket;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [game, setGame] = useState<Game>()
    const [selectedTool, setSelectedTool] = useState<Tool>("circle");

    useEffect(() => {
      game?.setTool(selectedTool);
    }, [selectedTool, game])

    useEffect(() => {
        if (canvasRef.current) {
            const g = new Game(canvasRef.current, roomId, socket);
            setGame(g);

            return () => {
                g.destroy();
            }
        }
    }, [canvasRef]);

    return (
        <div className="h-[100vh] overflow-hidden">
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
            <Topbar setSelectedTool={setSelectedTool} selectedTool={selectedTool} />
        </div>
    );
}

function Topbar({ selectedTool, setSelectedTool }: { selectedTool: Tool, setSelectedTool: (s: Tool) => void }) {
    return (
        <div className="fixed top-3 left-3 bg-white/10 backdrop-blur-lg shadow-md p-3 rounded-lg flex gap-3 border border-white/20 items-center ">
            <IconButton
                onClick={() =>
                    setSelectedTool("pencil")}
                activated={selectedTool === "pencil"}
                icon={<Pencil />}
            />
            <IconButton
                onClick={() =>
                    setSelectedTool("rect")}
                activated={selectedTool === "rect"}
                icon={<RectangleHorizontalIcon />}
            />
            <IconButton
                onClick={() =>
                    setSelectedTool("circle")}
                activated={selectedTool === "circle"}
                icon={<Circle />}
            />
            <IconButton onClick={() => {
                    setSelectedTool("eraser")
                }} activated={selectedTool === "eraser"} icon={<Eraser />}></IconButton>
                <IconButton onClick={() => {
                    setSelectedTool("move")
                }} activated={selectedTool === "move"} icon={<Move />}></IconButton>
        </div>
    );
}
