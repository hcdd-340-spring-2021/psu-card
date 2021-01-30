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
            <Text style={{ fontWeight: 'bold' }}>Student Name</Text>
            <Text style={{ fontWeight: '500' }}>ID: 00000000</Text>
          </View>
        </View>

        <View style={styles.profileRowItem}>

          <View style={styles.textDetails}>
            <Text style={{ fontWeight: 'bold' }}>Year</Text>
            <Text>Junior</Text>
          </View>

          <View style={styles.textDetails}>
            <Text style={{ fontWeight: 'bold' }}>Major</Text>
            <Text>HCDD</Text>
          </View>

          <View style={styles.textDetails}>
            <Text style={{ fontWeight: 'bold' }}>Minor</Text>
            <Text style>AI</Text>
          </View>
        </View>

        <View style={styles.profileRowItem}>
          <View style={styles.textDetails}>
            <Text style={{ fontWeight: 'bold' }}>Campus</Text>
            <Text>University Park</Text>
          </View>

          <View style={styles.textDetails}>
            <Text style={{ fontWeight: 'bold' }}>Email</Text>
            <Text>sxn000@psu.edu</Text>
          </View>

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
    borderRadius: Metrics.buttonRadius
  },
  pictureView: {
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  picture: {
    height: Metrics.images.large,
    width: Metrics.images.large,
    borderRadius: Metrics.images.large * 0.5,
    borderWidth: 1,
    borderColor: Colors.psudark,
  },
  pictureDetails: {
    flexDirection: 'column',
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
  },

  textDetails: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  profileRowItem: {
    marginTop: Metrics.marginVertical,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});