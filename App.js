import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import RedditTab from './components/RedditTab'

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Reddit: {
    screen: RedditTab,
  },
});

export default RootTabs;
