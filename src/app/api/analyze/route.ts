import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { companyName } = await req.json();

        const openAiKey = process.env.OPENAI_API_KEY;
        const googleKey = process.env.GOOGLE_API_KEY;

        if (!openAiKey || !googleKey) {
            console.error("API keys are undefined!");
            return NextResponse.json({ error: "API keys not set" }, { status: 500 });
        }

        // Prompt suomalaiselle kontekstille
        const prompt = `
You are an AI visibility analyst.
A user has provided the company name: "${companyName}".
Assume this is a Finnish company.
Without using a URL or exact location, assess the company's visibility in AI systems.
Categorize visibility as High, Medium, or Low based on how much information AI-powered searches are likely to find about this company.
Provide a short explanation for your rating.
Return the result in JSON format like this:
{
    "company": "${companyName}",
    "visibility": "<High/Medium/Low>",
    "explanation": "<Your explanation here>"
}
`;

        // OpenAI fetch
        const openAiResp = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${openAiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: prompt }],
            }),
        });
        const openAiData = await openAiResp.json();

        // Gemini fetch (simuloitu esimerkki, oikea endpoint voi vaihdella)
        const geminiResp = await fetch("https://api.gemini.com/v1/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${googleKey}`,
            },
            body: JSON.stringify({ companyName }),
        });
        const geminiData = await geminiResp.json();

        return NextResponse.json({
            company: companyName,
            openai: openAiData,
            gemini: geminiData,
        });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
