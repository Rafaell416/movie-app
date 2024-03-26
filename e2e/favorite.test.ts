import { by, device, expect, element, waitFor } from 'detox';

const FAVORITE_BUTTON = 'favoriteButton-108545';
const MOVIE_CARD = 'movieCard-108545';

describe('Like feature in movie app', () => {
  beforeAll(async () => {
    await device.reloadReactNative();
  });

  it('should mark a movie as favorite and then unfavorite it', async () => {

    await waitFor(element(by.id(MOVIE_CARD)))
      .toBeVisible()
      .withTimeout(5000);

    await element(by.id(FAVORITE_BUTTON)).tap();

    await expect(element(by.id(FAVORITE_BUTTON)).atIndex(0)).toHaveProp('name', 'favorite');

    await element(by.id(FAVORITE_BUTTON)).tap();

    await expect(element(by.id(FAVORITE_BUTTON)).atIndex(0)).toHaveProp('name', 'favorite-outline');
  });
});
