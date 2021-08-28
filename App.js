import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import Index from './src';

export default function App() {
  return (
    <Index/>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight
  },
});
