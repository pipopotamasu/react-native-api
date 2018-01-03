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
import axios from 'axios'

export default class QiitaTab extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      posts: null,
    };
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Qiita</Text>
      </View>
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
