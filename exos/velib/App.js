import React, { Component } from 'react';
import { StyleSheet, Text, View , AppRegistry, Animated} from 'react-native';


const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'column'
  },
  halfHeight: {
  flex: 2,
  backgroundColor: 'yellow'
  },
  quarterHeight: {
  flex: 2,
  backgroundColor: 'green'
  }
});

export default class FlexAnimationApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.halfHeight} >
        <Text>Hello, world!</Text>
         </View>
      <View style={styles.quarterHeight} />
      {/* <View style={[styles.quarterHeight, {backgroundColor: 'green'}]} /> */}
      </View>
      )
    }
  };

 
  AppRegistry.registerComponent('Flex', () => FlexAnimationApp);

