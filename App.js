import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appcontainer from './src/routes';
// import Tasks from './src/views/Tasks'

export default function App() {
  return (
    <Appcontainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
