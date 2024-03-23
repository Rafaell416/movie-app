import React from 'react';
import LayoutComponent from '../../components/Layout';
import {AppStackScreenProps} from '../../navigators/AppNavigator';
import {useSafeAreaInsetsStyle} from '../../utils/useSafeAreaInsetsStyle';
import {View, Image, FlatList, StyleSheet} from 'react-native';
import {width} from '../../utils/commons';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useEvent,
  useSharedValue,
} from 'react-native-reanimated';
import Gradient from '../../components/Gradient';
import BackImage from './auxiliars/BackImage';
import Cover from './auxiliars/Cover';
import {useGetFavorites} from '../../hooks/favorite';
import {toInteger} from 'lodash';

interface FavoriteScreenProps extends AppStackScreenProps<'Favorite'> {}

const Favorite: React.FC<FavoriteScreenProps> = ({}) => {
  const scrollX = useSharedValue(0);
  const data = useGetFavorites();
  const containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });
  return (
    <LayoutComponent style={[containerInsets]}>
      {data.map((item, index) => {
        return (
          <BackImage
            key={item}
            index={index}
            scrollX={scrollX}
            item={toInteger(item)}
          />
        );
      })}
      <Gradient />

      <Animated.FlatList
        bounces={false}
        horizontal
        data={data}
        pagingEnabled
        onScroll={scrollHandler}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => {
          return <Cover id={toInteger(item)} />;
        }}
      />
    </LayoutComponent>
  );
};

export default Favorite;
