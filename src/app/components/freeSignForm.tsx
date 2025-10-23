"use client";

import { useState, useEffect } from "react";

export default function FreeSignForm({ preFilledUrl = "", onClose }: { preFilledUrl?: string; onClose: () => void }) {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    const [url] = useState(preFilledUrl);

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
                    className="absolute top-1 right-5 text-gray-400 hover:text-gray-700 text-2xl"
                    arial-label="Sulje">
                    x
                </button>

                <h2 className="text-xl font-semibold text-center mb-4 text-black">
                    {url ? (
                        <>
                            <span className="block text-gray-600 text-sm mb-1">Analysoitava sivusto:</span>
                            <span className="text-primary font-bold break-words">www.{url}</span>
                        </>
                    ) : (
                        "Syötä vielä loput tiedot"
                    )}
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="email"
                        placeholder="Sähköposti"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="tel"
                        placeholder="Puhelin"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button type="submit" disabled={loading}
                        className="w-full px-4 py-2 bg-primary text-white rounded-md font-semibold hover:bg-primary-dark disabled:opacity-50 transition">

                        {loading ? "Lähetetään..." : "Lähetä"}
                    </button>
                </form>
            </div>
        </div>
    );
}
