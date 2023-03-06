export type PokemonURL = { name: string; url: string };

export type PokePageIndexResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonURL[];
};

export type PokemonType =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'unknown'
  | 'shadow';

export type PokemonResponse = {
  id: number;
  name: string;
  sprites: Sprites;
  types: Type[];
};

export type Sprites = {
  front_default: string;
};

export type Type = {
  slot: number;
  type: Species;
};

export type Species = {
  name: PokemonType;
  url: string;
};
