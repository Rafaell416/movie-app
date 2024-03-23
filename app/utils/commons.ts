import {Dimensions, Platform} from 'react-native';

export const isIoS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const horizontalScale = (size: number) => {
  return (width / guidelineBaseWidth) * size;
};

export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 1.5) =>
  size + (horizontalScale(size) - size) * factor;
