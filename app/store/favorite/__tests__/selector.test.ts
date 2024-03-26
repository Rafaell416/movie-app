import { favoriteSelector, likeSelector, favoritesSelector } from '../selector';

describe('favorite selectors', () => {
  const mockState = {
    favorite: {
      likes: { '1': 2 },
      favorites: { '1': { id: '1', name: 'Sample Movie' } },
    },
  };

  it('should select likes by id', () => {
    expect(likeSelector(mockState, '1')).toEqual(2);
  });

  it('should select all favorite ids', () => {
    expect(favoritesSelector(mockState)).toEqual(['1']);
  });

  it('should select favorite by id', () => {
    expect(favoriteSelector(mockState, '1')).toEqual({ id: '1', name: 'Sample Movie' });
  });
});