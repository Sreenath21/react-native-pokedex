import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {persistReducer, persistStore} from 'redux-persist';

import pokeDetailsReducer from '../features/pokeDetailsSlice';
import pokeIdsReducer from '../features/pokeIdsSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  pokemonIds: pokeIdsReducer,
  pokemonDetails: pokeDetailsReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
