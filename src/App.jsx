import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from './redux/store/store';

import Home from './screens/Home/Home';
import PokedexData from './screens/PokedexData/PokedexData';
import PokemonContextProvider from './context/PokemonContext';
import TypesContextProvider from './context/TypesContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar hidden />
        <PokemonContextProvider>
          <TypesContextProvider>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen
                  name="Data"
                  component={PokedexData}></Stack.Screen>
              </Stack.Navigator>
            </NavigationContainer>
          </TypesContextProvider>
        </PokemonContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
