import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { date } = await req.json();

    // Placeholder logic — tässä asiakas voi myöhemmin kytkeä oman järjestelmänsä
    const times = ["10:00", "11:00", "13:00", "14:30"];

    return NextResponse.json({
        requested: date,
        available: true,
        times
    });
}