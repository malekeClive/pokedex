import { TYPE_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ITypeName } from "@/models/apis";

function Type({ name }: { name: ITypeName }) {
  let color = "";

  if (name === "bug") color = TYPE_COLORS.bug;
  if (name === "dark") color = TYPE_COLORS.dark;
  if (name === "dragon") color = TYPE_COLORS.dragon;
  if (name === "electric") color = TYPE_COLORS.electric;
  if (name === "fairy") color = TYPE_COLORS.fairy;
  if (name === "fighting") color = TYPE_COLORS.fighting;
  if (name === "fire") color = TYPE_COLORS.fire;
  if (name === "flying") color = TYPE_COLORS.flying;
  if (name === "ghost") color = TYPE_COLORS.ghost;
  if (name === "grass") color = TYPE_COLORS.grass;
  if (name === "ground") color = TYPE_COLORS.ground;
  if (name === "ice") color = TYPE_COLORS.ice;
  if (name === "normal") color = TYPE_COLORS.normal;
  if (name === "poison") color = TYPE_COLORS.poison;
  if (name === "psychic") color = TYPE_COLORS.psychic;
  if (name === "rock") color = TYPE_COLORS.rock;
  if (name === "shadow") color = TYPE_COLORS.shadow;
  if (name === "steel") color = TYPE_COLORS.steel;
  if (name === "unknown") color = TYPE_COLORS.unknown;
  if (name === "water") color = TYPE_COLORS.water;

  return (
    <p className={cn("px-2 py-1 rounded-md text-xs capitalize", color)}>
      {name}
    </p>
  );
}

export default Type;
