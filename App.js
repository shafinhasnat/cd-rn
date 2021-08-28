import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Index from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight
  },
});
