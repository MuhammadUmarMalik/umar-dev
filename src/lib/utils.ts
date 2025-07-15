import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPlaceholderImage(index: number, text?: string): string {
  // This function returns placeholder images for the portfolio
  // In a real project, you would replace these with actual project images
  const colors = [
    "4f46e5", // indigo
    "0ea5e9", // sky
    "10b981", // emerald
    "8b5cf6", // violet
    "ec4899", // pink
    "f59e0b", // amber
    "ef4444", // red
    "06b6d4", // cyan
    "6366f1", // indigo
    "84cc16", // lime
    "8b5cf6", // violet
    "f43f5e", // rose
  ];
  
  const color = colors[index % colors.length];
  const displayText = text ? text.replace(/\s+/g, '+') : `Portfolio+${index + 1}`;
  // Use consistent dimensions for all placeholder images
  return `https://placehold.co/800x600/${color}/1a1a2e/svg?text=${displayText}&font=source-sans-pro`;
}
