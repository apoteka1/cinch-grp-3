import { useEffect, useState } from 'react';
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex({ cacheLimit: 100 * 1000000 });

const PokemonList = () => {
  const PokemonIds = [];

  for (let i = 1; i < 152; i++) {
    PokemonIds.push(i);
  }

  Promise.all(
    PokemonIds.map((id) => {
      return P.getResource(`/api/v2/pokemon/${id}`);
    })
  ).then((data) => console.log(data));

  useEffect(() => {}, []);

  return <div>PokemonList</div>;
};

export default PokemonList;
