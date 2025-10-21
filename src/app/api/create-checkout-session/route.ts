import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST() {
    try {
        if (!process.env.STRIPE_SECRET_KEY) {
            throw new Error("Stripe secret key missing from environment");
        }

        console.log("✅ Stripe secret key:", process.env.STRIPE_SECRET_KEY);

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "eur",
                        product_data: { name: "SpotRank Rival" },
                        unit_amount: 19900,
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error("❌ Stripe virhe:", err);
        return NextResponse.json(
            { error: err.message || "Tuntematon virhe" },
            { status: 500 }
        );
    }
}
