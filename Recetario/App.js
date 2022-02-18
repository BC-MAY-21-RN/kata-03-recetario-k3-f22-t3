/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import Search from './assets/img/search.svg';

const SearchBar = () => {
  return (
    <ScrollView>
      <View style={styles.body}>
        <TextInput
          placeholder="What do you want to eat?"
          placeholderTextColor="#fff"
          style={styles.input}
        />
      </View>
      <Image
        style={styles.image}
        source={require('./assets/img/microphone.png')}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 8,
    backgroundColor: '#ACACB0',
    borderRadius: 15,
  },
  body: {
    backgroundColor: '#fff',
  },
  image: {
    width: 30,
    height: 30,
  },
});
export default SearchBar;
