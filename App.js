import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors, Images } from './App/Themes';
import ProfileView from './App/Components/ProfileView'

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Use the function component to show the </Text>
      <Text> profile card with your information </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
    alignItems: 'center',
    justifyContent: 'center',
  },
});