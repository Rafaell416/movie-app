import {useMemo} from 'react';
import {
  useGetTrendingAllQuery,
  useGetTrendingMoviesQuery,
  useGetTrendingTvShowQuery,
} from '@app/store/services/api';
import {map} from 'lodash';
import { RootState } from '../store';
import {trendingTypeSelector} from '@app/store/result/selector';
import {useSelector} from 'react-redux';
import {ResultState} from '@app/store/result';

export const useGetTrendingAll = () => {
  const {data, isLoading, isFetching, refetch} = useGetTrendingAllQuery();

  return useMemo(
    () => ({
      data: map(data?.results, 'id'),
      isLoading,
      isFetching,
      refetch,
    }),
    [data, isLoading, isFetching, refetch],
  );
};

export const useGetTrendingMovie = () => {
  const {data, isLoading, isFetching, refetch} = useGetTrendingMoviesQuery();

  return useMemo(
    () => ({
      data: map(data?.results, 'id'),
      isLoading,
      isFetching,
      refetch,
    }),
    [data, isLoading, isFetching, refetch],
  );
};

export const useGetTrendingTvShow = () => {
  const {data, isLoading, isFetching, refetch} = useGetTrendingTvShowQuery();

  return useMemo(
    () => ({
      data: map(data?.results, 'id'),
      isLoading,
      isFetching,
      refetch,
    }),
    [data, isLoading, isFetching, refetch],
  );
};

export const useGetTrendingType = (params: {
  type: keyof ResultState;
  id: number;
}) => {
  return useSelector((state: RootState) => trendingTypeSelector(state, params));
};
