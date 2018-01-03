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
import QiitaPost from './QiitaPost'

export default class QiitaTab extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      posts: null,
    };
  }

  componentDidMount() {
    const self = this;
    // Get qiita posts
    axios.get(`https://qiita.com/api/v2/items`).then((response) => {
      self.setState({
        posts: response.data
      });
    }).catch((e) => {
      console.log(e)
    });
  }

  render() {
    const {
      posts,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Qiita</Text>
        </View>
        <View style={styles.redditBox}>
          <FlatList
            style={styles.redditList}
            data={posts}
            renderItem={({ item, index }) => (
              <QiitaPost
                post={item}
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
