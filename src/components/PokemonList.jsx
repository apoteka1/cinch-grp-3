import { useEffect, useState } from 'react';
import Pokedex from 'pokedex-promise-v2';
import PokemonCard from './PokemonCard';
const P = new Pokedex({ cacheLimit: 100 * 1000000 });

const PokemonList = () => {
  const PokemonIds = [];
  const [pokemon, setPokemon] = useState([]);

  for (let i = 1; i < 152; i++) {
    PokemonIds.push(i);
  }

  useEffect(() => {
    Promise.all(
      PokemonIds.map((id) => {
        return P.getResource(`/api/v2/pokemon/${id}`);
      })
    ).then((data) => setPokemon(data));
  }, []);

  console.log(pokemon);

  return (
    <div>
      PokemonList;
      <ul>
        {pokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
