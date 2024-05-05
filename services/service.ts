import { customFetch } from "@/lib/customFetch";

class Service {
  async getPokemons({ pageParam }: { pageParam: number }) {
    const res = await customFetch(`pokemon?limit=20&offset=${pageParam}`);
    return res.results;
  }

  async getPokemon(name: string) {
    const res = await customFetch(`pokemon/${name}`);
    return res;
  }

  async searchPokemons() {
    const res = await customFetch("pokemon?limit=100000&offset=0");
    return res;
  }

  async types() {
    const res = await customFetch("type");
    return res;
  }
}

export default new Service();
