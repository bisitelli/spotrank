export async function analyzeCompany(companyName: string) {
    try {
        const res = await fetch("http://localhost:5678/webhook/analyze-company", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ companyName }),
        });

        if (!res.ok) {
            throw new Error("Failed to fetch report");
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
