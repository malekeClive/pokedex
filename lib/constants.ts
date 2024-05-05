const POKEDEX_API = process.env.NEXT_PUBLIC_POKEDEX_API;

const TYPE_COLORS = {
  normal: "bg-slate-500",
  fighting: "bg-red-500",
  flying: "bg-purple-300",
  poison: "bg-purple-500",
  ground: "border-b-orange-500",
  rock: "border-b-orange-800",
  bug: "bg-green-500",
  ghost: "bg-gray-700",
  steel: "bg-gray-400",
  fire: "bg-amber-500",
  water: "bg-blue-500",
  grass: "bg-green-300",
  electric: "bg-yellow-500",
  psychic: "bg-pink-500",
  ice: "bg-blue-300",
  dragon: "bg-orange-400",
  dark: "bg-gray-800",
  fairy: "bg-pink-300",
  unknown: "bg-rose-500",
  shadow: "bg-gray-400",
};

export { POKEDEX_API, TYPE_COLORS };
