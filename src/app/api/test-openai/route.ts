import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { companyUrl } = await req.json();

        const openAiKey = process.env.OPENAI_API_KEY;
        if (!openAiKey) {
            return NextResponse.json({ error: "Missing OPENAI_API_KEY" }, { status: 500 });
        }

        const prompt = `
You are an AI visibility auditor.
Analyze the AI visibility of the company at the following URL: "${companyUrl}".
Return a concise JSON with keys:
{
    "summary": "short text summary",
    "visibilityLevel": "low / medium / high",
    "keyInsights": ["list of 2-5 key points about AI visibility"]
}
Do not add extra commentary outside the JSON.
`;

        const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${openAiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "You are a business AI visibility auditor." },
                    { role: "user", content: prompt },
                ],
            }),
        });

        const data = await res.json();
        return NextResponse.json({
            url: companyUrl,
            result: data.choices?.[0]?.message?.content ?? "No response",
        });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
