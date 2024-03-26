import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {api} from './services/api';
import {resultSlice} from './result';
import {favoriteSlice} from './favorite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const favoritePersistConfig = {
  key: 'favorite',
  storage: AsyncStorage,
};

const middlewares = [api.middleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const persistedFavoriteReducer = persistReducer(favoritePersistConfig, favoriteSlice.reducer);

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    result: resultSlice.reducer,
    favorite: persistedFavoriteReducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PURGE'],
      },
    }).concat(middlewares);
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
