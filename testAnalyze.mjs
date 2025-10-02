import fetch from "node-fetch";

const companyName = "Blue Lagoon";

async function testAnalyze() {
    try {
        const res = await fetch("http://localhost:3000/api/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ companyName }),
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Analysis result:\n", JSON.stringify(data, null, 2));
    } catch (err) {
        console.error("Error fetching analysis:", err);
    }
}

testAnalyze();
