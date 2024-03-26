import { memo, useCallback } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import {useFavoriteActions, useGetLike} from '@app/hooks/favorite';
import Pressable from "./Pressable";
import Icon, {Icons} from './Icons';
import { StyleSheet } from "react-native";

const FavoriteButton = ({ onPress, data }: { onPress?: () => void, data: MovieDetail | TvShowDetail; }) => {
  const {actions} = useFavoriteActions();
  const favorite = useGetLike(data.id);
  const scale = useSharedValue(1);

  const toggle = useCallback((data: Movie | Trending | TvShow) => {
    if (!favorite) {
      actions.setFavorite(data);
    } else {
      actions.removeFavorite(data.id);
    }

    scale.value = withSpring(favorite ? 1 : 1.3, { damping: 2 }, () => {
      if (favorite) {
        scale.value = withSpring(1);
      }
    });

  }, [favorite, actions]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <Pressable onPress={toggle} onPressParams={data} style={styles.button} testID={`favoriteButton-${data.id}`}>
      <Animated.View style={animatedStyles}>
        <Icon
          type={Icons.MaterialIcons}
          size={20}
          name={!!favorite ? 'favorite' : 'favorite-outline'}
          color={!!favorite ? 'red' : '#777a7c'}
        />
      </Animated.View>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#383737',
    backgroundColor: '#1a1e25c1',
    borderRadius: 20 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  }
})

export default memo(FavoriteButton);