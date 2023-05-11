import React, {useState, createContext} from 'react';

export const TypesContext = createContext({
  types: [],
  setTypes: () => {},
  checked: [],
  setChecked: () => {},
  genders: [],
  setGenders: () => {},
});

const TypesContextProvider = ({children}) => {
  const [filteredTypes, setFilteredTypes] = useState([]);
  const [checked, setChecked] = useState([]);
  const [genders, setGenders] = useState([]);

  return (
    <TypesContext.Provider
      value={{
        filteredTypes,
        setFilteredTypes,
        checked,
        setChecked,
        genders,
        setGenders,
      }}>
      {children}
    </TypesContext.Provider>
  );
};

export default TypesContextProvider;
