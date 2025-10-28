import { CheckCircle } from "lucide-react";

type SpotRankCardProps = {
    title: string;
    description: string;
    features: string[];
    cta: string;
    isFree?: boolean;
};

export default function SpotRankCard({
    title,
    description,
    features,
    cta,
    isFree = false,
}: SpotRankCardProps) {

    const handleCheckout = async () => {
        try {

            const apiUrl = isFree ? "/api/free-sign-up" : "/api/create-checkout-session";

            const res = await fetch(apiUrl, {
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

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 text-xl font-semibold mb-3">
                        <svg
                            fill="none"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-blue-500"
                        >
                            <path
                                d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span>{title}</span>
                    </div>

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
            <div className="mt-12">
                <button onClick={handleCheckout} className="w-full rounded-lg bg-primary text-white font-medium py-2.5 hover:bg-primary/90 transition-colors">
                    {cta}
                </button>
            </div>
        </div>
    );
}
