import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import RedditTab from './components/RedditTab'

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#333' }}>
    <Text style={{ color: 'white' }}>Home Screen</Text>
  </View>
);

const RootTabs = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Reddit: {
      screen: RedditTab,
    },
  },
  {
    tabBarPosition: 'top',
    animationEnabled: true,
    showIcon: 'true',
    tabBarOptions: {
      activeTintColor: '#ffffff',
      style: {
        backgroundColor: '#009688',
      }
    }
  },
);

export default RootTabs;
