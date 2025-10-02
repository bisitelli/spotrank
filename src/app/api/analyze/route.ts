import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { companyName } = await req.json();

    try {
        const res = await fetch("http://localhost:5678/webhook/analyze-company", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ companyName }),
        });

        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Failed to fetch from n8n" }, { status: 500 });
    }
}
