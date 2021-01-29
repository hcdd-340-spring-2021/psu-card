import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Colors, Metrics } from './App/Themes';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{ height: Metrics.images.large, width: Metrics.images.large }}
        source={Images.student1} />
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
