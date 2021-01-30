import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Colors, Metrics } from './App/Themes';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <View style={styles.pictureView}>
          <Image style={styles.picture}
            source={Images.student4} />

          <View style={styles.pictureDetails}>
            <Text>Student Name</Text>
            <Text>ID: 00000000</Text>
          </View>
        </View>

        <View style={styles.profileRowItem}>
          <Text>Year</Text>
          <Text>Major</Text>
          <Text>Minor</Text>
        </View>
        <View style={styles.profileRowItem}>
          <Text>Junior</Text>
          <Text>HCDD</Text>
          <Text style>AI</Text>
        </View>

        <View style={styles.profileRowItem}>
          <Text>Campus</Text>
          <Text>Email</Text>
        </View>
        <View style={styles.profileRowItem}>
          <Text>University Park</Text>
          <Text>sxn000@psu.edu</Text>
        </View>
      </View>
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
  card: {
    padding: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth * .9,
    borderWidth: Metrics.borderWidth,
  },
  pictureView: {
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,

  },
  picture: {
    height: Metrics.images.large,
    width: Metrics.images.large,
    borderWidth: 1,
    borderColor: Colors.psudark,
  },
  pictureDetails: {
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
  },
  profileRowItem: {
    marginTop: Metrics.marginVertical,
  }
});
