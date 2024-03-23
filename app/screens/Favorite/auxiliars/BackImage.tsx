import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {width} from '../../../utils/commons';
import {StyleSheet} from 'react-native';
import {useGetFavorite} from '../../../hooks/favorite';

interface BackImageProps {
  item: number;
  index: number;
  scrollX: SharedValue<number>;
}

const BackImage = ({item, index, scrollX}: BackImageProps) => {
  const favorite = useGetFavorite(item);
  const animatedStyle = useAnimatedStyle(() => {
    const opacityAnim = interpolate(
      scrollX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-0.6, 1, -0.6],
      Extrapolation.CLAMP,
    );
    return {
      opacity: opacityAnim,
    };
  });

  return (
    <Animated.Image
      key={index}
      source={{
        uri: 'https://image.tmdb.org/t/p/w500/' + favorite?.poster_path,
      }}
      style={[
        StyleSheet.absoluteFillObject,
        animatedStyle,
        {
          width,
          height: width,
        },
      ]}
      blurRadius={20}
    />
  );
};

export default BackImage;
