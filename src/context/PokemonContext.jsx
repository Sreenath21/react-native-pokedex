import React, {useState, createContext} from 'react';

export const PokemonContext = createContext({
  pokemon: {
    height: 0,
    weight: 0,
    genders: [],
    eggGroups: [],
    abilities: [],
    types: [],
    weaknesses: [],
  },
  setPokemon: () => {},
});

const PokemonContextProvider = ({children}) => {
  const [pokemon, setPokemon] = useState({
    height: 0,
    weight: 0,
    genders: [],
    eggGroups: [],
    abilities: [],
    types: [],
    weaknesses: [],
    stats: [],
  });

  return (
    <PokemonContext.Provider value={{pokemon, setPokemon}}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
