import _ from 'lodash';
import React from 'react';

import {
  MaterialTopTabBarProps,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import Tabs from '../../components/Tabs';
import LayoutComponent from '../../components/Layout';
import {View} from 'react-native';
import Trending from './sections/Trending';
import Movie from './sections/Movie';
import TV from './sections/Tv';
import {useSafeAreaInsetsStyle} from '../../utils/useSafeAreaInsetsStyle';

const TABS = ['All', 'Movies', 'TV Shows'];

const Header = ({state, navigation}: MaterialTopTabBarProps) => {
  const onNavigate = (value: string) =>
    navigation.navigate(state.routes[TABS.indexOf(value)].name);

  return (
    <View style={{paddingTop: 10}}>
      <Tabs
        options={['All', 'Movies', 'TV Shows']}
        selectedOption={TABS[state.index]}
        onPress={onNavigate}
      />
    </View>
  );
};

const Tab = createMaterialTopTabNavigator<HomeParamList>();

export default () => {
  const containerInsets = useSafeAreaInsetsStyle(['top']);

  return (
    <LayoutComponent style={[containerInsets]}>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: false,
          swipeEnabled: false,
          lazy: true,
          tabBarBounces: false,
        }}
        style={{backgroundColor: 'transparent'}}
        tabBar={props => <Header {...props} />}
        initialRouteName="home.all"
        sceneContainerStyle={{
          backgroundColor: 'transparent',
        }}>
        <Tab.Screen component={Trending} name="home.all" />
        <Tab.Screen component={Movie} name="home.movies" />
        <Tab.Screen component={TV} name="home.tv" />
      </Tab.Navigator>
    </LayoutComponent>
  );
};
