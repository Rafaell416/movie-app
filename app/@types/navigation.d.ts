type AppStackParamList = {
  Root: undefined;
  Details: {
    id: number;
    type: Trending['media_type'];
  };
};

type TabsNavigationParamList = {
  Home: undefined;
  Favorite: undefined;
  Profile: undefined;
};

type HomeParamList = {
  ['home.all']: undefined;
  ['home.movies']: undefined;
  ['home.tv']: undefined;
};
