import service from "@/services/service";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const usePokemons = () => {
  return useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: service.getPokemons,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage.length === 20 ? allPages.length * 20 : undefined;
      return nextPage;
    },
  });
};

const usePokemon = (name: string) => {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => service.getPokemon(name),
  });
};

const useSearchPokemon = () => {
  return useQuery({
    queryKey: ["searchPokemon"],
    queryFn: () => service.searchPokemons(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

const useTypes = () => {
  return useQuery({
    queryKey: ["types"],
    queryFn: () => service.types(),
  });
};
export { usePokemons, usePokemon, useSearchPokemon, useTypes };
