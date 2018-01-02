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
import Reddit from './components/Reddit'
import axios from 'axios'

export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      reddits: null,
    };
  }

  componentDidMount() {
    const self = this;
    // Get reddits
    axios.get(`https://www.reddit.com/r/vue.json`).then((response) => {
      self.setState({
        reddits: response.data.data.children
      });
      console.log(this.state.reddits)
    }).catch((e) => {
      console.log(e)
    });
  }

  render() {
    const {
      reddits,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Reddit</Text>
        </View>
        <View style={styles.redditBox}>
          <FlatList
            style={styles.redditList}
            data={reddits}
            renderItem={({ item, index }) => (
              <Reddit
                reddit={item.data}
              />
            )}
          />
        </View>
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
