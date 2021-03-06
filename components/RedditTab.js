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
import Reddit from './Reddit'
import RedditInput from './RedditInput';
import axios from 'axios'

export default class RedditTab extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      reddits: null,
    };
  }

  _onPress = (text) => {
    this.getReddit(text)
  }

  componentDidMount() {
    this.getReddit('vue');
  }

  getReddit(text) {
    const self = this;
    // Get reddits
    axios.get(`https://www.reddit.com/r/${text}.json`).then((response) => {
      self.setState({
        reddits: response.data.data.children
      });
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
        <RedditInput onPress={this._onPress} />
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
