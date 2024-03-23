import React from 'react';
import {width} from '../utils/commons';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../theme/colors';

interface GradientProps {
  style?: StyleProp<ViewStyle>;
}

const Gradient = ({style}: GradientProps) => {
  return (
    <View style={[styles.container, {width: width, height: width}, style]}>
      <LinearGradient
        colors={['rgba(15,16,20,0)', colors.background]}
        style={styles.gradientBottom}
      />
      <LinearGradient
        colors={[colors.background, 'rgba(15,16,20,0)']}
        style={styles.gradientTop}
      />
    </View>
  );
};

export default Gradient;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  gradientBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 180,
  },
  gradientTop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 180,
  },
});
