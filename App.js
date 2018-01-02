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
        <FlatList
          style={styles.todoList}
          data={reddits}
          renderItem={({ item, index }) => (
            <Reddit
              reddit={item.data}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
  todoList: {
    paddingLeft: 10,
    paddingRight: 10,
  }
});
