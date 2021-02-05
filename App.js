import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors, Images } from './App/Themes';
import ProfileView from './App/Components/ProfileView'

export default function App() {
  const profile = {
    image: Images.student4,
    year: 'Junior',
    name: 'Function Component',
    id: '00000000',
    major: 'HCDD',
    minor: 'Psychology',
    campus: 'University Park',
    email: 'fxc000@psu.edu'
  }
  return (
    <View style={styles.container}>
      {ProfileView(profile)}
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