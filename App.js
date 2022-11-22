import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/views/Main';
import BoardView from './src/views/Boards';


export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
