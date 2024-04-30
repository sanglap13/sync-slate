import { Camera } from "@/@types/components/TCanvas";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const COLORS = ["#d97706", "#7c3aed", "#059669", "#db2777", "#dc2626"];

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
}
