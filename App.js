import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Colors, Images } from './App/Themes';
import ProfileView from './App/Components/ProfileView'

export default function App() {
  const [readOnly, setReadOnly] = useState(false)
  return (
    <View style={styles.container}>
      {ProfileView({readOnly})}
      <Button title="Create Profile!" onPress={() => setReadOnly(true)}/>
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