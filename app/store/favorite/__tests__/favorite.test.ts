import { configureStore } from '@reduxjs/toolkit';
import { favoriteSlice, actions } from '../index';

describe('favorite slice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { favorite: favoriteSlice.reducer } });
  });

  it('should handle initial state', () => {
    expect(store.getState().favorite).toEqual({ likes: {}, favorites: {} });
  });

  it('should handle setFavorite', () => {
    const sampleData = { id: '1', name: 'Sample Movie' }; // Adjust based on Movie | Trending | TvShow interface
    store.dispatch(actions.setFavorite({ data: sampleData }));
    expect(store.getState().favorite.favorites[sampleData.id]).toEqual(sampleData);
    expect(store.getState().favorite.likes[sampleData.id]).toEqual(1);
  });

  it('should handle removeFavorite', () => {
    const sampleData = { id: '1', name: 'Sample Movie' };
    store.dispatch(actions.setFavorite({ data: sampleData }));
    store.dispatch(actions.removeFavorite({ id: sampleData.id }));
    expect(store.getState().favorite.favorites).not.toHaveProperty(sampleData.id);
    expect(store.getState().favorite.likes).not.toHaveProperty(sampleData.id);
  });
});