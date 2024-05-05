import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function imageUrl(url: string) {
  const pathname = new URL(url).pathname;
  const length = pathname.split("/").length - 1;
  const id = pathname.split("/")[length - 1];

  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
}

export function compare(data: any[], key: string, type: "asc" | "desc") {
  if (type === "asc") {
    return data?.sort((a, b) =>
      a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
    );
  }

  return data?.sort((a, b) => (a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0));
}
