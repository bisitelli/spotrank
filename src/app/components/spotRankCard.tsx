import { ReactNode } from "react";
import { CheckCircle } from "lucide-react";

type SpotRankCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
    features: string[];
    cta: string;
};

export default function SpotRankCard({
    icon,
    title,
    description,
    features,
    cta,
}: SpotRankCardProps) {

    const handleCheckout = async () => {
    try {
        const res = await fetch("/api/create-checkout-session", {
            method: "POST",
        });
        const data = await res.json();

        if (data.url) {
            window.location.href = data.url; // Ohjaa Stripe Checkoutiin
        } else {
            alert("Stripe-maksun käynnistys epäonnistui.");
        }
    } catch (err) {
        console.error(err);
        alert("Virhe maksua käynnistäessä.");
    }
};

    return (
        <div className="flex flex-col justify-between h-full rounded-xl border border-border-light bg-background-light p-6 shadow-sm transition-shadow">
            {/* Yläosa */}
            <div className="flex flex-col gap-4 flex-grow">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/20 text-primary">
                    {icon}
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-subtle-light dark:text-subtle-dark">{description}</p>
                </div>

                <ul className="mt-2 flex flex-col gap-2 text-sm text-muted-light dark:text-muted-dark">
                    {features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="size-4 text-primary mt-[2px]" />
                            <span>{f}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA */}
            <div className="mt-6">
                <button onClick={handleCheckout} className="w-full rounded-lg bg-primary text-white font-medium py-2.5 hover:bg-primary/90 transition-colors">
                    {cta}
                </button>
            </div>
        </div>
    );
}
