interface IPokemon {
  name: string;
  url: string;
}

interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
}

interface IMove {
  move: {
    name: string;
    url: string;
  };
}

interface ISprite {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: {
    home: {
      front_default: string;
    };
  };
}

interface IStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

type ITypeName =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "unknown"
  | "shadow";

interface IType {
  type: {
    name: ITypeName;
  };
}

interface IPokemonDetail {
  abilities: IAbility[];
  height: number;
  id: number;
  moves: IMove[];
  name: string;
  sprites: ISprite;
  stats: IStat[];
  types: IType[];
  weight: number;
}

export type {
  IPokemon,
  IPokemonDetail,
  IAbility,
  IMove,
  ISprite,
  IStat,
  IType,
  ITypeName,
};
