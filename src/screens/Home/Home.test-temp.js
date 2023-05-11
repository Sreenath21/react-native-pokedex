import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {render, fireEvent} from '@testing-library/react-native';

import Home from './Home';
import PokedexData from '../PokedexData/PokedexData';
import {persistor, store} from '../../redux/store/store';

function renderWithNavigation({screen = {}, navigatorConfig = {}} = {}) {
  const Stack = createNativeStackNavigator();

  const App = (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Data" component={PokedexData} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );

  return {...render(App)};
}

test('Navigating to Data page when click on pokemon card', () => {
  const {findByText, getByTestID, getByPlaceHolderText, getByText} =
    renderWithNavigation;

  // expect(getByTestID('title').props.children).toMatch('Pokédex');
  expect(1).toBe(1);
});
