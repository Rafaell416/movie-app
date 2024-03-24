import {toInteger} from 'lodash';
import {View, Image} from 'react-native';
import Cover from './auxiliars/Cover';
import React, {useCallback, useEffect} from 'react';
import {width} from '../../utils/commons';
import {colors} from '../../theme/colors';
import BackImage from './auxiliars/BackImage';
import Gradient from '../../components/Gradient';
import Icon, {Icons} from '../../components/Icons';
import Pressable from '../../components/Pressable';
import LayoutComponent from '../../components/Layout';
import {TabStackScreenProps} from '../../navigators/AppNavigator';
import {useSafeAreaInsetsStyle} from '../../utils/useSafeAreaInsetsStyle';
import EmptyState from './auxiliars/EmptyState';
import { useIsFocused } from '@react-navigation/native';
import {
  useFavoriteActions,
  useGetFavorites,
  useGetLike,
} from '../../hooks/favorite';
import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming
} from 'react-native-reanimated';

interface FavoriteScreenProps extends TabStackScreenProps<'Favorite'> {}

const BUTTON_SIZE = width * 0.2;

const Favorite: React.FC<FavoriteScreenProps> = ({}) => {
  const isFocused = useIsFocused();
  const [position, setPosition] = React.useState(0);
  const data = useGetFavorites();
  const isLiked = useGetLike(toInteger(data[position]));
  const scrollX = useSharedValue(0);
  const {actions} = useFavoriteActions();
  const containerInsets = useSafeAreaInsetsStyle(['top', 'bottom']);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
      runOnJS(setPosition)(Math.round(event.contentOffset.x / width));
    },
  });

  const onDelete = useCallback((id: number) => {
    actions.removeFavorite(id);
  }, []);

  const renderItem = useCallback(({ item }) => <Cover id={toInteger(item)} />, [])

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

      
     {!!data.length ? (
      <>
      <Animated.FlatList
        horizontal
        data={data}
        pagingEnabled
        bounces={true}
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.toString()}
        //ListEmptyComponent={EmptyState}
        renderItem={renderItem}
      />
       <View
        style={{
          width: width - 40,
          flexDirection: 'row',
          marginBottom: width * 0.3,
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={onDelete}
          onPressParams={data[position]}
          style={{
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
            backgroundColor: colors.bunkerDark,
            borderRadius: BUTTON_SIZE / 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            type={Icons.MaterialIcons}
            size={40}
            name={!!isLiked ? 'favorite' : 'favorite-outline'}
            color={!!isLiked ? 'red' : '#777a7c'}
          />
        </Pressable>
      </View>
      {isFocused && (
        <SwipeGif />
      )}
      </>
     ): (
      <EmptyState />
     )}
    </LayoutComponent>
  );
};

const SwipeGif = () => {
  const opacity = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 500 });

    setTimeout(() => {
      opacity.value = withTiming(0, { duration: 500 });
    }, 2000);

  }, []);

  return (
    <Animated.View style={[{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 150,
      alignItems: 'center',
    }, animatedStyles]}>
       <Image
        source={require("../../assets/swipe-left.gif")}
        style={{
          resizeMode: 'contain',
          height: 200,
          width: 200,
        }}
      />
    </Animated.View>
  )
}

export default Favorite;
