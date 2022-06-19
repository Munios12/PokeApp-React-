import pokelogo from "../../img/pokelogo.png";
import "./header.css";

export const Header = () => {
  return (
    <>
      <header className="header-app">
        <img className="header-app__title" src={pokelogo} alt="pokemonlogo" />
        <ul className="header-app__list"></ul>
      </header>
    </>
  );
};
