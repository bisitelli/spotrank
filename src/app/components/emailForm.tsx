"use client";

import { useState } from "react";

export default function EmailForm({ preFilledUrl = "", onClose }: { preFilledUrl?: string; onClose: () => void }) {
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState(preFilledUrl);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        const res = await fetch("/api/subscribe", {
            method: "POST",
            body: JSON.stringify({ email, url }),
        });

        setStatus(res.ok ? "success" : "error");
        if (res.ok) {
            setEmail("");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg black/40 backdrop-blur-sm" onClick={onClose}></div>



            <div className="relative bg-background-light rounded-2xl shadow-xl p6 w-full max-w-md z-10 animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl"
                    arial-label="Sulje">
                    x
                </button>

                <h2 className="text-xl font-semibold text-center mb-4 text-black">
                    Syötä vielä yrityksesi sähköposti saadaksesi raportin
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="email"
                        required
                        placeholder="Sähköposti"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark disabled:opacity-50 transition">
                        {status === "loading" ? "Lähetetään..." : "Lähetä raportti"}
                    </button>

                    {status === "success" && <p className="text-primary text-center mt-2">Kiitos! Saat analyysin pian sähköpostiisi.</p>}
                    {status === "error" && <p className="text-primary text-center mt-2">Jokin meni pieleen. Yritä uudelleen.</p>}
                </form>
            </div>
        </div>
    );
}

