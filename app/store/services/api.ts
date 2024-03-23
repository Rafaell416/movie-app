import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {map} from 'lodash';

const URL = 'https://api.themoviedb.org/3/';

const baseQuery = fetchBaseQuery({
  baseUrl: URL,
  prepareHeaders: headers => {
    const token = '';
    headers.set(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Mjg0OTM2ZTI3NzQyOTFhYjQ3MDFiZjJiMmFjOWY2ZCIsInN1YiI6IjVjYTdlMzg1MGUwYTI2NGM4YmYwYWUyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GfTTvBMwOY4pUE3hLPW5koTnbD7VrmQjiLdEyAcG_sA',
    );
    headers.set('accept', `application/json`);
    return headers;
  },
});

export const api = createApi({
  reducerPath: 'themoviedbApi',
  baseQuery: baseQuery,
  endpoints: build => ({
    getTrendingAll: build.query<TrendingResponse, void>({
      query: () => 'trending/all/day?language=en-US',
    }),
    getTrendingMovies: build.query<MovieResponse, void>({
      query: () => 'trending/movie/day?language=en-US',
    }),
    getTrendingTvShow: build.query<TvShowResponse, void>({
      query: () => 'trending/tv/day?language=en-US',
    }),
    searchMovies: build.query<MovieResponse, string>({
      query: query => `search/movie?query=${query}`,
      transformResponse: (response: MovieResponse) => {
        return {...response, replace: ''};
      },
    }),
  }),
});

export const {
  useGetTrendingAllQuery,
  useGetTrendingMoviesQuery,
  useGetTrendingTvShowQuery,
} = api;
