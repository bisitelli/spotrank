import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
    try {
        const { url, email, phone, tag } = await req.json();

        if (!url || !email || !phone) {
            return NextResponse.json({ error: "URL ja sähköposti ovat pakollisia." }, { status: 400 });
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
                    [url, email, phone, tag]
                ],
            },
        });

        return NextResponse.json({ message: "Lähetetty onnistuneesti!" });
    } catch (error: any) {
        console.error("Google Sheets -virhe:", error.message);
        return NextResponse.json({ error: "Virhe Google Sheets -integraatiossa." }, { status: 500 });
    }
}
