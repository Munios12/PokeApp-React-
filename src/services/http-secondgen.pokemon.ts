const url = "https://pokeapi.co/api/v2/pokemon/?limit=235&offset=151";

export function getSecondGen() {
  return fetch(url).then((resp) => resp.json());
}

export function getSecondPokemonData(url2: any) {
  return fetch(url2).then((resp) => resp.json());
}
