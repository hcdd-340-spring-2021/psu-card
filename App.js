import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Button, SectionList } from 'react-native';
import { Colors, Images, Profiles } from './App/Themes';
import ProfileView from './App/Components/ProfileView'

const { width, height } = Dimensions.get('window');

const renderHeader = (section) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{section.major}</Text>
    </View>
  )
}


export default function App() {

  const initialProfiles = [
    { major: 'HCDD',
      data: [Profiles[0], Profiles[1], Profiles[2]]
    },
    { major: 'IST',
      data: [Profiles[3], Profiles[4], Profiles[5]]
    }
  ]

  // set initial State
  const [profileList, setProfileList] = useState(initialProfiles)

  return (
    <View style={styles.container}>
      <SectionList
        sections={profileList}
        renderItem={({ item }) => ProfileView(item)}
        ItemSeparatorComponent={() => (<View style={{ height: 10 }} />)}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ alignItems: 'center' }}
        renderSectionHeader={({ section }) => renderHeader(section)}
      />

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
  header: {
    height: 60,
    width: width * 0.9,
    backgroundColor: "#ff8080",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 24
  }
});