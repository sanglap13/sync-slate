import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const COLORS = ["#d97706", "#7c3aed", "#059669", "#db2777", "#dc2626"];

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
