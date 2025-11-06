import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { url, email, phone } = body;

        if (!url || !phone || !email) {
            return NextResponse.json({ error: "Puuttuvat kentät" }, { status: 400 });
        }

        // authentikaatio sheetsille
        const auth = new google.auth.JWT({
            email: process.env.GOOGLE_CLIENT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        // lisää rivin sheetsiin
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEETS_ID,
            range: "Leads!A:D",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[new Date().toLocaleString("fi-FI"), url, email, phone || "-"]],
            },
        });

        return NextResponse.json({ success: true, response });
    } catch (error) {
        console.error("Virhe Google Sheets -integraatiossa:", error);
        return NextResponse.json({ error: "Virhe tallennettaessa" }, { status: 500 });
    }
}
