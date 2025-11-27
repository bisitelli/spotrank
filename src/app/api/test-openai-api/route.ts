import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function GET() {
    try {
        const client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const res = await client.responses.create({
            model: "gpt-4.1-mini",
            input: "say ok"
        });

        return NextResponse.json({
            ok: true,
            output: res.output_text
        });

    } catch (err: any) {
        return NextResponse.json({
            ok: false,
            error: err.message,
            details: err
        }, { status: 500 });
    }
}
