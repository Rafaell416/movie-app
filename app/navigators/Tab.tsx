import {useEffect} from 'react';
import {Home, Favorite} from '../screens';
import Icon, {Icons} from '../components/Icons';
import {Pressable, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

const ROUTES: {
  route: keyof TabsNavigationParamList;
  type:
    | typeof Icons.Ionicons
    | typeof Icons.MaterialCommunityIcons
    | typeof Icons.MaterialIcons
    | typeof Icons.Feather
    | typeof Icons.FontAwesome
    | typeof Icons.FontAwesome5
    | typeof Icons.AntDesign
    | typeof Icons.Entypo
    | typeof Icons.SimpleLineIcons
    | typeof Icons.Octicons
    | typeof Icons.Foundation
    | typeof Icons.EvilIcons;
  icon: string;
  component: React.FC<any>;
}[] = [
  {
    route: 'Home',
    type: Icons.MaterialCommunityIcons,
    icon: 'movie-roll',
    component: Home,
  },
  {
    route: 'Favorite',
    type: Icons.MaterialIcons,
    icon: 'favorite-border',
    component: Favorite,
  },
];

const TabButton = (props: TabButtonProps) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState?.selected;
  const scale = useSharedValue(focused ? 0.9 : 1.2);
  const rotate = useSharedValue(focused ? '0deg' : '360deg');

  useEffect(() => {
    scale.value = withSpring(focused ? 1.2 : 0.9);
    rotate.value = withSpring(focused ? '360deg' : '0deg');
  }, [focused]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
        {
          rotate: rotate.value,
        },
      ],
    };
  });

  return (
    <Pressable onPress={onPress} style={[styles.container, {top: 0}]}>
      <Animated.View style={[animatedStyles]}>
        <Icon
          type={item.type}
          name={item.icon}
          size={30}
          color={focused ? 'white' : '#777a7c'}
        />
      </Animated.View>
    </Pressable>
  );
};

interface TabButtonProps extends BottomTabBarButtonProps {
  item: (typeof ROUTES)[0];
}

const TabNavigation = createBottomTabNavigator<TabsNavigationParamList>();

const TabNavigationStack = () => (
  <TabNavigation.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 60,
        position: 'absolute',
        bottom: 16,
        right: 20,
        left: 20,
        borderRadius: 20,
        backgroundColor: '#1a1e25',
        borderWidth: 2,
        borderColor: '#131820',
      },
    }}>
    {ROUTES.map((item, index) => {
      return (
        <TabNavigation.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: props => <TabButton {...props} item={item} />,
          }}
        />
      );
    })}
  </TabNavigation.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
});

export default TabNavigationStack;
