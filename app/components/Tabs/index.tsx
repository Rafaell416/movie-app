import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

type TabsProps = {
  options: string[];
  selectedOption: string;
  onPress?: (option: string) => void;
};

const PADDING = 20;
const INNER_RADIUS = 20;
const OUTHER_RADIUS = INNER_RADIUS + PADDING;

const Tabs: React.FC<TabsProps> = React.memo(
  ({options, selectedOption, onPress}) => {
    const {width: windowWidth} = useWindowDimensions();

    const internalPadding = PADDING;
    const segmentedControlWidth = windowWidth - 40;

    const itemWidth =
      (segmentedControlWidth - internalPadding) / options.length;

    const rStyle = useAnimatedStyle(() => {
      return {
        left: withTiming(
          itemWidth * options.indexOf(selectedOption) + internalPadding / 2,
        ),
      };
    }, [selectedOption, options, itemWidth]);

    return (
      <View
        style={[
          styles.container,
          {
            width: segmentedControlWidth,
            borderRadius: OUTHER_RADIUS,
            paddingLeft: internalPadding / 2,
          },
        ]}>
        <Animated.View
          style={[
            {
              width: itemWidth,
            },
            rStyle,
            styles.activeBox,
          ]}
        />
        {options.map(option => {
          return (
            <TouchableOpacity
              onPress={() => {
                onPress?.(option);
              }}
              key={option}
              style={[
                {
                  width: itemWidth,
                },
                styles.labelContainer,
              ]}>
              <Text style={styles.label}>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: '#131820',
  },
  activeBox: {
    position: 'absolute',
    borderRadius: INNER_RADIUS,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    elevation: 3,
    height: '80%',
    top: '10%',
    backgroundColor: '#1a1e25',
  },
  labelContainer: {justifyContent: 'center', alignItems: 'center'},
  label: {
    fontSize: 16,
    color: 'white',
  },
});

export default Tabs;
