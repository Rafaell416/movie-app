import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '..';
import {ResultState} from './trending';

export const trendingTypeSelector = createSelector(
  ({result}: RootState) => result,
  (_: any, params: {type: keyof ResultState; id: number}) => params,
  (data, params) => data[params.type]?.[params.id],
);
