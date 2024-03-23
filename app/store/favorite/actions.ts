import {AppDispatch} from '..';
import {actions as actionsSlice} from '.';

const favoriteActions = (dispatch: AppDispatch) => {
  const actions = {
    setFavorite: (data: Movie | Trending | TvShow) => {
      dispatch(actionsSlice.setFavorite({data}));
    },
    removeFavorite: (id: number) => {
      dispatch(actionsSlice.removeFavorite({id}));
    },
  };

  return actions;
};

export default favoriteActions;
