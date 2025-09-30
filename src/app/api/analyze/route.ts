import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { companyName } = await req.json();

        if (!companyName) {
            return NextResponse.json({ error: "Company name is required" }, { status: 400 });
        }

        // Prompt
        const prompt = `Analyze what you know about the company "${companyName}".
Summarize presence, strengths, weaknesses, and AI visibility. Keep it concise and business-friendly.`;

        // --- Call OpenAI ---
        const openAiResp = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: prompt }],
            }),
        });

        const openAiData = await openAiResp.json();
        const gptAnswer = openAiData?.choices?.[0]?.message?.content || "";

        // --- Call Google Gemini ---
        const geminiResp = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GOOGLE_API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                }),
            }
        );

        const geminiData = await geminiResp.json();
        const geminiAnswer = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || "";

        // Return combined results
        return NextResponse.json({
            company: companyName,
            openai: gptAnswer,
            gemini: geminiAnswer,
        });
    } catch (error: any) {
        console.error("Analyze API error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
