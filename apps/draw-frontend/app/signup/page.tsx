"use client";
import { PencilRuler } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { HTTP_BACKEND } from "@/config";

export default function SignupPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        username: "",  // Changed from email to username
        password: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const register = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.name && formData.username && formData.password) {
            try {
                const data = {
                    name: formData.name,
                    username: formData.username,  // Changed from email to username
                    password: formData.password,
                };
                const response = await axios.post(`${HTTP_BACKEND}/signup`, data);
                toast.success("Registered successfully");
                router.push("/signin");
            } catch (error: any) {
                if (error.response) {
                    toast.error(error.response.data.message || "Registration failed");
                } else {
                    toast.error("Unable to connect to server");
                }
                console.error(error);
            }
        } else {
            toast.error("Please fill in all fields");
        }
    };

    return (
        <>
            <div className="bg-gradient-to-t from-indigo-900 to-white via-indigo-300 dark:from-gray-950 dark:to-indigo-900">
                <div className="absolute top-50 right-50 p-4 cursor-pointer">
                    <PencilRuler
                        className="h-8 w-auto text-indigo-600 dark:text-indigo-400"
                        onClick={() => router.push("/")}
                    />
                </div>
                <div className="flex min-h-screen items-center justify-center bg-inherit">
                    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-gray-800">
                                Register your account
                            </h1>
                            <p className="text-gray-600 text-sm mt-2">
                                Already have an account?{" "}
                                <span
                                    className="underline cursor-pointer"
                                    onClick={() => {
                                        router.push("/signin");
                                    }}
                                >
                                    Login
                                </span>
                            </p>
                        </div>
                        <form className="mt-6" onSubmit={register}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-md font-medium text-gray-700"
                                >
                                    Enter your name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border text-zinc-800 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Harkirat Singh"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="username"
                                    className="block text-md font-medium text-gray-700"
                                >
                                    Your username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 text-zinc-800 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="harkiratsingh"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block text-md font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 text-zinc-800 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none sm:text-sm font-medium"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}