import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
    try {
        const { url, email, tag } = await req.json();

        if (!url || !email ) {
            return NextResponse.json({ error: "Add all details" }, { status: 400 });
        }

        // Google Sheets autentikaatio
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        // Lisää rivi Sheetsiin
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEETS_ID,
            range: "Taulukko1!A:C", // sheetin nimi ja sarakkeet
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [url, email, tag]
                ],
            },
        });

        return NextResponse.json({ message: "Success" });
    } catch (error: any) {
        console.error("Error", error.message);
        return NextResponse.json({ error: "Error" }, { status: 500 });
    }
}
