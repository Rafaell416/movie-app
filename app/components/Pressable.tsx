import _ from 'lodash';
import React from 'react';
import {Pressable as RNPressable} from 'react-native';

interface Props extends React.ComponentProps<typeof RNPressable> {
  onPress?: (...params: any) => void;
  onPressParams?: object | string | number | boolean;
}

const Pressable: React.FC<Props> = ({children, onPress, ...props}) => {
  const _onPress = React.useCallback(() => {
    _.isArray(props.onPressParams)
      ? onPress?.(...props.onPressParams)
      : onPress?.(props.onPressParams);
  }, [onPress, props.onPressParams]);

  return (
    <RNPressable onPress={_onPress} {...props}>
      {children}
    </RNPressable>
  );
};

export default Pressable;
