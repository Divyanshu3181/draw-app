import { ReactNode } from "react";

export function IconButton({
    icon, onClick, activated
}: {
    icon: ReactNode,
    onClick: () => void,
    activated: boolean
}) {
    return (
        <button
            className={`p-3 rounded-full transition-all border ${
                activated ? "bg-green-500 text-white shadow-lg" : "bg-gray-800 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={onClick}
        >
            {icon}
        </button>
    );
}
