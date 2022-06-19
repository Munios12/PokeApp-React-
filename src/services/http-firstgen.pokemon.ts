const url = "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0";

export function getFirstGen() {
  return fetch(url).then((resp) => resp.json());
}

export function getPokemonData(url2: any) {
  return fetch(url2).then((resp) => resp.json());
}
