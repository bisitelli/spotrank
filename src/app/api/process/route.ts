import { NextResponse } from "next/server";
import { crawlSite } from "@/services/crawler/crawlSite";
import { analyzeContent } from "@/services/ai/analyzeContent";
import { generateStorefrontData } from "@/services/ai/generateWebfrontData";
import { buildWebfront } from "@/services/webfront/buildWebfront";
import { publishWebfront } from "@/services/webfront/publishWebfront";
import { writeFileJSON } from "@/services/utils/fetch";
import { classifyEndpoints } from "@/services/actionLayer/classifyEndpoints";
import { generateActionLayer } from "@/services/actionLayer/generateActionLayer";

export async function POST(req: Request) {
    try {
        const { url } = await req.json();
        if (!url) {
            return NextResponse.json({ error: "URL required" }, { status: 400 });
        }

        // 1. Crawl website
        const crawled = await crawlSite(url);
        console.log("🟦 CRAWLED TEXT (first 500 chars):", crawled.fullText.slice(0, 500));
        console.log("🟨 DISCOVERED API CALLS:", crawled.apiCalls);

        // 2. AI analysis
        const aiResult = await analyzeContent(crawled.fullText);
        console.log("🟧 FULL CRAWLED TEXT LENGTH:", crawled.fullText.length);

        // 3. Structured storefront data (summary, services, faq, businessDetails)
        const storefrontData = await generateStorefrontData(aiResult);

        // 4. Classify API endpoints
        const endpointGroups = classifyEndpoints(crawled.apiCalls);

        // 5. Generate Action Layer from services + endpoints
        const actionLayer = await generateActionLayer(storefrontData.services, endpointGroups);

        // Save into storefrontData
        storefrontData.action_layer = actionLayer;

        // 6. Build storefront object (includes action layer)
        const storefront = await buildWebfront(storefrontData);

        // 7. Save JSON to file
        await writeFileJSON(`data/webfronts/${storefront.id}.json`, storefront);

        // 8. Publish URL
        const published = await publishWebfront(storefront.id, storefront);

        return NextResponse.json({
            id: storefront.id,
            url: published.url
        });

    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "Processing failed", details: String(err) },
            { status: 500 }
        );
    }
}
