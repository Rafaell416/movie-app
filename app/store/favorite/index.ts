import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface FavoriteState {
  likes: Record<string, number>;
  favorites: Record<string, Movie | Trending | TvShow>;
}

const initialState: FavoriteState = {
  likes: {},
  favorites: {},
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorite: (
      state,
      action: PayloadAction<{data: Movie | Trending | TvShow}>,
    ) => {
      const {data} = action.payload;

      state.likes[data.id] = (state.likes[data.id] ?? 0) + 1;
      state.favorites[data.id] = data;
    },
    removeFavorite: (state, action: PayloadAction<{id: number}>) => {
      delete state.favorites[action.payload.id];
      delete state.likes[action.payload.id];
    },
  },
});

export const actions = favoriteSlice.actions;
