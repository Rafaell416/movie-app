import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '..';
import {keys} from 'lodash';

export const likeSelector = createSelector(
  ({favorite}: RootState) => favorite.likes,
  (_: any, id: number) => id,
  (data, id) => data[id],
);

export const favoritesSelector = createSelector(
  ({favorite}: RootState) => favorite,
  data => keys(data.favorites),
);

export const favoriteSelector = createSelector(
  ({favorite}: RootState) => favorite,
  (_: any, id: number) => id,
  (data, id) => data.favorites[id],
);
