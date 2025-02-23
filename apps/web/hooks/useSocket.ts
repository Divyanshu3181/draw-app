import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";


export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, SetSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4M2UxMzI1OC00MjMxLTRmMDEtOGEyNi04ZmRkNzVlMjE3NTMiLCJpYXQiOjE3Mzg5NTg2MzB9.iVmYdMefia-4t06454L8aJZHF0uZPXMfGloKPMmAS7Q`);

        ws.onopen = () => {
            setLoading(false);
            SetSocket(ws);
        }
    }, []);

    return {
        socket,
        loading
    }
}