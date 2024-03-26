import Animated from 'react-native-reanimated';
import {Text as RNText} from 'react-native';
import {ComponentProps} from 'react';

const Text = Animated.createAnimatedComponent(RNText);

export type TextProps = ComponentProps<typeof Text>;
export default Text;