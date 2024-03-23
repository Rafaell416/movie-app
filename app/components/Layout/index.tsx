import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {colors} from '../../theme/colors';

interface Props extends React.ComponentProps<typeof View> {}

const LayoutComponent = ({children, style, ...props}: Props) => {
  return (
    <View {...props} style={[styles.container, style]}>
      <StatusBar
        animated
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
});

export default LayoutComponent;
