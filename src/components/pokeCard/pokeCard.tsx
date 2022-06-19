import { log } from "console";
import { iPokeModel } from "../../models/pokeModel";
import "./pokeCard.css";

export const PokeCard = ({ pokemon }: { pokemon: iPokeModel }) => {
  return (
    <>
      <div className={`pokeCard ${pokemon.types[0].type.name}`}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
        <div className="data__container">
          <p className="pokeCard__name">
            #{pokemon.id}: {pokemon.name}
          </p>
          <div className={`pokeCard__type`}>
            {pokemon.types.map((type: any, id: any) => {
              return (
                <div key={id} className={`type__container`}>
                  <p> {type.type.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
