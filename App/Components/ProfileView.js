import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, Image } from 'react-native';
import { Images, Colors, Metrics } from '../Themes';

const ProfileView = ({ readOnly }) => {
    const [name, setName] = useState("")
    const [profileId, setProfileId] = useState("")
    const [year, setYear] = useState("")
    const [major, setMajor] = useState("")
    const [minor, setMinor] = useState("")
    const [campus, setCampus] = useState("")
    const [email, setEmail] = useState("")
    return (
        <View style={styles.card}>

            <View style={styles.pictureView}>
                <Image style={styles.picture}
                    source={Images.student4} />

                {!readOnly && (
                    <View style={styles.pictureDetails}>
                        <TextInput
                            value={name}
                            style={styles.textInput}
                            onChangeText={(text) => setName(text)}
                            placeholder="Name"
                        />
                        <TextInput
                            value={profileId}
                            style={styles.textInput}
                            onChangeText={(text) => setProfileId(text)}
                            placeholder="ID"
                        />
                    </View>
                )}

                {readOnly && (
                    <View style={styles.pictureDetails}>
                        <Text style={{ fontWeight: 'bold' }}>{name}</Text>
                        <Text style={{ fontWeight: '500' }}>{profileId}</Text>
                    </View>
                )}
            </View>

            <View style={styles.profileRowItem}>

                <View style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Year</Text>

                    {!readOnly && (
                        <TextInput
                            value={year}
                            style={styles.textInput}
                            onChangeText={(text) => setYear(text)}
                            placeholder="Year"
                        />)}

                    {readOnly && (
                        <Text>{year}</Text>
                    )}

                </View>

                <View style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Major</Text>

                    {!readOnly && (
                        <TextInput
                            value={major}
                            style={styles.textInput}
                            onChangeText={(text) => setMajor(text)}
                            placeholder="Major"
                        />)}

                    {readOnly && (
                        <Text>{major}</Text>
                    )}
                </View>

                <View style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Minor</Text>
                    {!readOnly && (
                        <TextInput
                            value={minor}
                            style={styles.textInput}
                            onChangeText={(text) => setMinor(text)}
                            placeholder="Minor"
                        />)}

                    {readOnly && (
                        <Text>{minor}</Text>
                    )}
                </View>
            </View>

            <View style={styles.profileRowItem}>
                <View style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Campus</Text>
                    {!readOnly && (
                        <TextInput
                            value={campus}
                            style={styles.textInput}
                            onChangeText={(text) => setCampus(text)}
                            placeholder="Campus"
                        />)}

                    {readOnly && (
                        <Text>{campus}</Text>
                    )}
                </View>

                <View style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Email</Text>
                    {!readOnly && (
                        <TextInput
                            value={email}
                            style={styles.textInput}
                            onChangeText={(text) => setEmail(text)}
                            placeholder="Email"
                        />)}

                    {readOnly && (
                        <Text>{email}</Text>
                    )}
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    },
    textInput: {
        justifyContent: 'center',
        borderBottomWidth: 1,
        width: 60
    }

});

export default ProfileView;