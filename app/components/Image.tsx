import React, {useState} from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  ImageProps as RNImageProps,
  ActivityIndicator,
} from 'react-native';
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface ImageProps extends RNImageProps {
  cache?: boolean;
  pinching?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const Image: React.FC<ImageProps> = ({
  style,
  cache,
  pinching,
  contentContainerStyle,
  ...props
}) => {
  const [loading, setLoading] = useState(true);
  const opacity = useSharedValue(0);

  const onLoad = React.useCallback(() => {
    opacity.value = withTiming(1, {duration: 1000});
    setLoading(() => false);
  }, []);

  const opacityStyle = useAnimatedStyle(() => {
    return {opacity: opacity.value};
  });
  return (
    <Animated.View style={contentContainerStyle}>
      {!cache && (
        <Animated.Image
          onLoad={onLoad}
          style={[style, opacityStyle]}
          {...props}
        />
      )}
      {loading && <ActivityIndicator style={StyleSheet.absoluteFill} />}
    </Animated.View>
  );
};

export default Image;
