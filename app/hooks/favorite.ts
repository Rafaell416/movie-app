import {useMemo} from 'react';
import {RootState, useAppDispatch} from '../store';
import favoriteActions from '../store/favorite/actions';
import {useSelector} from 'react-redux';
import {
  favoriteSelector,
  favoritesSelector,
  likeSelector,
} from '../store/favorite/selector';

export const useFavoriteActions = () => {
  const dispatch = useAppDispatch();
  const actions = favoriteActions(dispatch);
  return useMemo(
    () => ({
      actions,
    }),
    [actions],
  );
};

export const useGetLike = (id: number) =>
  useSelector((state: RootState) => likeSelector(state, id));

export const useGetFavorites = () =>
  useSelector((state: RootState) => favoritesSelector(state));

export const useGetFavorite = (id: number) =>
  useSelector((state: RootState) => favoriteSelector(state, id));
