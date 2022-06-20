import React, { useEffect, useState } from "react";
import { iPokeModel } from "../../models/pokeModel";
import { PokeCard } from "../pokeCard/pokeCard";
import * as api from "../../services/http-secondgen.pokemon";

const SegundaGen = () => {
  const initialTwoGenListState: Array<iPokeModel> = [];
  const [twoGenList, setTwoGenList] = useState(initialTwoGenListState);

  useEffect(() => {
    api.getSecondGen().then((data) => {
      let promises: Array<any> = [];

      data.results.forEach((item: any) => {
        promises.push(api.getSecondPokemonData(item.url));
      });

      Promise.all(promises).then((data) => {
        setTwoGenList(data);
      });
    });
  }, []);
  return (
    <>
      <h1 className="title">Second Gen Pokemons</h1>
      <ul className="pokeList__container">
        {twoGenList.map((poke) => (
          <li key={poke.name}>
            <PokeCard pokemon={poke} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SegundaGen;
