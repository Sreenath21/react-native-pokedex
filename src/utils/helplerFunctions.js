import COLORS from './colors';

export const getZeroFilledId = id => {
  if (id > 999) {
    return id.toString();
  }
  return ('000' + id).slice(-3);
};

export const capitalize = name => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const mergeAbilities = abilities => {
  return abilities.map(ab => ab.ability.name).join('/');
};

export const getGradient = pokemon => {
  let gradient;

  if (pokemon.types.length <= 1) {
    gradient = pokemon.types.map(poke => COLORS[poke.type.name]);
    gradient.push(gradient[0]);
  } else {
    gradient = pokemon.types.map(poke => COLORS[poke.type.name]);
  }

  return gradient;
};

// input: data => root data from url `/pokemon-species/${route.params.id}`
// output: string[]
export const getEggGroups = data =>
  data.egg_groups.map(item => capitalize(item.name));

// input: Object[] => root/"flavor_text_entries"
// output: string
export const getDescription = descArr => {
  const requiredVersion = [
    'red',
    'yellow',
    'gold',
    'silver',
    'crystal',
    'ruby',
    'firered',
    'leafgreen',
    'diamond',
  ];
  const chars = {
    '\f': ' ',
    '\n': ' ',
  };
  const filteredByEnglish = descArr.filter(
    item =>
      item.language.name === 'en' &&
      requiredVersion.includes(item.version.name),
  );

  const fullDescription = filteredByEnglish
    .map(desc => desc.flavor_text)
    .join('')
    .replace(/[\n\f]/g, m => chars[m]);

  return fullDescription;
};

// input : Object => root data from api `type/${route.params.id}`
// output: string[]
export const getWeaknesses = data => {
  const weaknesses = data.damage_relations.double_damage_from.map(
    type => type.name,
  );

  return weaknesses;
};

//input: (name : String, Object[]) =>
// [1] pokemon name from route.params.name
// [2] root data from both the api "/gender/male/"" and "/gender/male/" as an array
// output: Object[]
export const getGenders = (name, genderArr) => {
  const isMale = Boolean(
    genderArr[0].pokemon_species_details.filter(
      poke => poke.pokemon_species.name === name,
    ).length,
  );

  const isFemale = Boolean(
    genderArr[1].pokemon_species_details.filter(
      poke => poke.pokemon_species.name === name,
    ).length,
  );

  return [
    {gender: isMale, name: 'Male'},
    {gender: isFemale, name: 'Female'},
  ];
};

// for DEX ATTRIBUTE COMPONENT
export const getAbilities = ab => ab.map(data => data.ability.name);

// for DEX ATTRIBUTE COMPONENT
export const getHeight = height => {
  return `${Math.floor(height / 3)}'${Math.round(((height % 3) / 3) * 10)}"`;
};

// for DEX ATTRIBUTE COMPONENT
export const stringifyGender = genders => {
  return genders
    ?.filter(item => item.gender && item.name)
    ?.map(item => item.name)
    ?.join(', ');
};

// for DEX ATTRIBUTE COMPONENT
export const stringifyAbilites = abilities => {
  return abilities?.map(ability => capitalize(ability.ability.name)).join(', ');
};

// for STATSViewer
export const getStatsObject = pokemon => {
  return pokemon.stats.map(stat => ({
    [stat.stat.name]: stat.base_stat,
  }));
};

export const filterByTypes = (data, filteredTypes) => {
  const modified = data.map(pokemon => {
    const modifiedTypes = pokemon.types.map(t => t.type.name);
    return {...pokemon, modifiedTypes};
  });

  const byTypes = modified.filter(pokemon => {
    for (let i = 0; i < filteredTypes.length; i++) {
      if (pokemon.modifiedTypes.indexOf(filteredTypes[i]) >= 0) {
        return true;
      }
    }
  });

  return byTypes;
};

export const filterByGenders = (pokemons, genders, genderData) => {
  const temp = pokemons.filter(poke => {
    for (let i = 0; i < genders.length; i++) {
      // console.log('POKEMON Name :', poke.name);
      // console.log('GENDERS_CHECK: ', genderData[genders[i]]);
      if (genderData[genders[i]].includes(poke.name)) {
        return true;
      }
    }
  });

  return temp;
};

export const removeItemsFromArray = (arr, itemstoRemove) => {
  return arr.filter(item => {
    return !itemstoRemove.includes(item);
  });
};

export const lookForGenders = arr => {
  return arr.filter(item => {
    return ['male', 'female', 'genderless'].includes(item);
  });
};
