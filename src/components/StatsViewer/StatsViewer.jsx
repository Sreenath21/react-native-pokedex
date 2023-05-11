import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import StatsBar from '../StatsBar/StatsBar';
import {PokemonContext} from '../../context/PokemonContext';
import {getStatsObject} from '../../utils/helplerFunctions';
import styles from './StatsViewer.style';

const StatsViewer = () => {
  const {pokemon} = useContext(PokemonContext);

  const stats = getStatsObject(pokemon);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Stats</Text>

        <View style={styles.barContainer}>
          <StatsBar name="HP" value={stats[0].hp} />
          <StatsBar name="Attack" value={stats[1].attack} />
          <StatsBar name="Defense" value={stats[2].defense} />
          <StatsBar name="Speed" value={stats[5].speed} />
          <StatsBar name="Sp. Attack" value={stats[3]['special-attack']} />
          <StatsBar name="Sp. Def." value={stats[4]['special-defense']} />
        </View>
      </View>
    </View>
  );
};

export default StatsViewer;
