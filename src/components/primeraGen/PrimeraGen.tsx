import React, { useState, useEffect } from "react";
import { iPokeModel } from "../../models/pokeModel";
import * as api from "../../services/http-firstgen.pokemon";
import { PokeCard } from "../pokeCard/pokeCard";
import "./primeraGen.css";

export const PrimeraGen = () => {
  const initialOneGenListState: Array<iPokeModel> = [];
  const [oneGenList, setOneGenList] = useState(initialOneGenListState);

  useEffect(() => {
    api.getFirstGen().then((data) => {
      let promises: Array<any> = [];

      data.results.forEach((item: any) => {
        promises.push(api.getPokemonData(item.url));
      });

      Promise.all(promises).then((data) => {
        setOneGenList(data);
      });
    });
  }, []);

  return (
    <>
      <h1 className="title">First Gen Pokemons</h1>
      <ul className="pokeList__container">
        {oneGenList.map((poke) => (
          <li key={poke.name}>
            <PokeCard pokemon={poke} />
          </li>
        ))}
      </ul>
    </>
  );
};
