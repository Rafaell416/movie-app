import {createSlice} from '@reduxjs/toolkit';
import {api} from '../services/api';
import {reduce} from 'lodash';

export interface ResultState {
  trending?: Record<string, Trending>;
  movie?: Record<string, Movie>;
  tv?: Record<string, TvShow>;
}

const initialState: ResultState = {
  trending: {},
  movie: {},
  tv: {},
};

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      api.endpoints.getTrendingAll.matchFulfilled,
      (state, action) => {
        state.trending = reduce(
          action.payload.results,
          (accumulator, current) => {
            accumulator[current.id] = current;
            return accumulator;
          },
          {...state.trending},
        );
      },
    );
    builder.addMatcher(
      api.endpoints.getTrendingMovies.matchFulfilled,
      (state, action) => {
        state.movie = reduce(
          action.payload.results,
          (accumulator, current) => {
            accumulator[current.id] = current;
            return accumulator;
          },
          {...state.movie},
        );
      },
    );
    builder.addMatcher(
      api.endpoints.getTrendingTvShow.matchFulfilled,
      (state, action) => {
        state.tv = reduce(
          action.payload.results,
          (accumulator, current) => {
            accumulator[current.id] = current;
            return accumulator;
          },
          {...state.tv},
        );
      },
    );
  },
});
