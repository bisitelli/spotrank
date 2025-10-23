"use client";

import { useState, useEffect } from "react";

export default function FreeSignForm({ preFilledUrl = "", onClose }: { preFilledUrl?: string; onClose: () => void }) {
    const [url, setUrl] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedUrl = localStorage.getItem("url");
        if (storedUrl) setUrl(storedUrl);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!url || !email) {
            alert("Täytä kaikki vaaditut kentät.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/free-sign-up", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url, email, phone }),
            });

            if (!res.ok) {
                throw new Error("Virhe lomakkeen lähetyksessä");
            }

            alert("Lähetys onnistui!");
        } catch (error) {
            console.error(error);
            alert("Tapahtui virhe lomakkeen lähetyksessä.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg black/40 backdrop-blur-sm" onClick={onClose}></div>



            <div className="relative bg-background-light rounded-2xl shadow-xl p-8 w-full max-w-md z-10 animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl"
                    arial-label="Sulje">
                    x
                </button>

                <h2 className="text-xl font-semibold text-center mb-4 text-black">
                    Syötä vielä yrityksesi sähköposti saadaksesi raportin
                </h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Sähköposti"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Puhelin"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? "Lähetetään..." : "Lähetä"}
                    </button>
                </form>
            </div>
        </div>
    );
}
