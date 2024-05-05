"use client";

import React from "react";
import { useSearchPokemon, useTypes } from "@/lib/api/queries";
import Pokemon from "./pokemon";
import { IPokemon, ITypeName } from "@/models/apis";
import { Button } from "@/components/ui/button";
import { ArrowDownUp } from "lucide-react";
import { compare } from "@/lib/utils";

function Search({ search }: { search: string }) {
  const { data } = useSearchPokemon();
  const { data: types } = useTypes();
  const [isSorted, setIsSorted] = React.useState(false);
  const [type, setType] = React.useState<ITypeName | undefined>(undefined);
  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    let filteredPokemon = data?.results.filter((pokemon: IPokemon) =>
      pokemon.name.includes(search)
    );

    if (isSorted) {
      filteredPokemon = compare(filteredPokemon, "name", "asc");
    } else {
      filteredPokemon = compare(filteredPokemon, "name", "desc");
    }

    setPokemons(filteredPokemon);
  }, [isSorted, data, search]);

  const sortHandler = () => {
    setIsSorted((prev) => !prev);
  };

  const typeHandler = (name: ITypeName) => {
    setType(name);
  };

  const clearTypesHandler = () => {
    setType(undefined);
  };

  return (
    <div className="w-full md:w-10/12 m-auto flex flex-col gap-4">
      <div className="flex flex-wrap gap-2 mt-4">
        {types?.results?.map(({ name }: { name: ITypeName }) => (
          <Button
            key={name}
            size="sm"
            variant={type === name ? "default" : "outline"}
            onClick={() => typeHandler(name)}
          >
            {name}
          </Button>
        ))}
        <Button size="sm" onClick={clearTypesHandler}>
          Clear filter
        </Button>
      </div>
      <div className="self-end">
        <Button
          variant={isSorted ? "default" : "outline"}
          size="icon"
          onClick={sortHandler}
        >
          <ArrowDownUp size={16} />
        </Button>
      </div>
      <div className="flex mt-5 mb-5 flex-col md:grid md:grid-cols-3 md:grid-row-1 md:items-center gap-4">
        {pokemons?.map((pokemon: IPokemon) => (
          <Pokemon
            key={pokemon.name}
            image={pokemon.url}
            name={pokemon.name}
            typeFilter={type}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
