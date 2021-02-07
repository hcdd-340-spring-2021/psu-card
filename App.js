import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Colors, Images, Profiles } from './App/Themes';
import ProfileView from './App/Components/ProfileView'

const getRandomInt = (max) => {
  //get random integer from [0, max)
  return Math.floor(Math.random() * Math.floor(max));
}

const getRandomProfile = () => {
  // get a random profile
  return Profiles[getRandomInt(Profiles.length)]
}

export default function App() {

  // set the first profile as the initial state
  const [profile, setProfile] = useState(Profiles[0])

  return (
    <View style={styles.container}>
      {ProfileView(profile)}

      <View style={{ marginTop: 5 }}>
        <Button title="Get a random student!" color={Colors.psu}
          // update state to a new profile
          onPress={() => { setProfile(getRandomProfile()) }}
        />
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
});