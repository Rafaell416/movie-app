import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '..';
import {DETAIL, ResultState} from '.';

export const trendingTypeSelector = createSelector(
  ({result}: RootState) => result,
  (_: any, params: {type: keyof ResultState; id: number}) => params,
  (data, params) => data[params.type]?.[params.id],
);

export const detailSelector = createSelector(
  ({result}: RootState) => result,
  (_: any, params: {type: Trending['media_type']; id: number}) => params,
  (data, params) => data[DETAIL[params.type]]?.[params.id],
);
