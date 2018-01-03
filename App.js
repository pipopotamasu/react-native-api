/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';
import RootTab from './components/RootTab'

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RootTab />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#333',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 5
  },
  titleText: {
    fontSize: 20,
    color: 'white'
  },
  redditBox: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  redditList: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  }
});
