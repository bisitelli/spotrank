"use client";

import { useState } from "react";

export default function FreeSignForm({
    preFilledUrl = "",
    onClose,
}: {
    preFilledUrl?: string;
    onClose: () => void;
}) {
    const [url, setUrl] = useState(preFilledUrl);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<"success" | "error" | "info">("info");

    const safeUrl = url
        ? url.startsWith("www.")
            ? url
            : `www.${url}`
        : "";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();



        if (!safeUrl || !email || !phone) {
            alert("Täytä kaikki kentät: URL, sähköposti ja puhelin.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: safeUrl, email, phone }),
            });

            setMessageType("success");
            setMessage("Success! Your information has been submitted — you’ll receive your website analysis by email soon.");
            setTimeout(() => {
                onClose();
            }, 5000);
        } catch (error) {
            setMessageType("error");
            setMessage("Something went wrong. Try again.");
            setTimeout(() => setMessage(""), 5000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>

            <div className="relative bg-background-light rounded-2xl shadow-xl p-8 w-full max-w-md z-10 animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-1 right-5 text-gray-400 hover:text-gray-700 text-4xl"
                    aria-label="Close"
                >
                    ×
                </button>

                <h2 className="text-xl font-semibold text-center mb-4 text-black">
                    {url ? (
                        <>
                            <span className="block text-gray-900 text-xl mb-1">
                                Enter your details
                            </span>
                        </>
                    ) : (
                        "Syötä vielä loput tiedot"
                    )}
                </h2>

                {message && (
                    <div
                        className={`p-3 mb-4 rounded-md text-white whitespace-pre-line ${messageType === "success" ? "bg-green-500" : "bg-red-500"
                            }`}
                    >
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    {/* URL-input näkyy jos se on tyhjä tai haluat antaa mahdollisuuden muuttaa sitä */}
                    <input
                        type="text"
                        placeholder="Your company URL"
                        value={safeUrl}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-4 py-2 bg-primary text-white rounded-md font-semibold hover:bg-primary-dark disabled:opacity-50 transition"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
                <div className="flex items-center gap-1 mt-4">
                    <div className="text-primary size-7">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold">SpotRank</h2>
                </div>
            </div>
        </div>
    );
}
