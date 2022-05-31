import React from 'react';
//map abilities - destructure
//map base stats- destructure
//map types- destructure
//sprites.front_default- destructure
const PokemonCard = ({ name, id, abilities, types, sprites }) => {
  return (
    <li className='list'>
      <div className='pokemonId'>

        <p>
          #{id} {name}
        </p>

      <img src={sprites.front_default} />
      </div>


      {types.map(({ type }) => {
        return <p key={type.name}> &nbsp; {type.name}</p>;
      })}

      {abilities.map(({ ability }) => {
        return <p key={ability.name}> &nbsp; {ability.name}</p>;
      })}
    </li>
  );
};

export default PokemonCard;
