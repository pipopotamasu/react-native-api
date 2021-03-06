import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#333',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})

const QiitaPost = (props) => {
  const {
    post,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.text} >{post.title}</Text>
      </View>
    </View>
  );
}

export default QiitaPost;
