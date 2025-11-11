import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Yhdistää Tailwind-luokat ja poistaa päällekkäisyydet
export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}