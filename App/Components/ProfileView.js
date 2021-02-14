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
                            style={styles.textInput}
                        />
                        <TextInput
                            style={styles.textInput}
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
                            style={styles.textInput}
                        />)}

                    {readOnly && (
                        <Text>{year}</Text>
                    )}

                </View>

                <View style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Major</Text>

                    {!readOnly && (
                        <TextInput
                            style={styles.textInput}
                        />)}

                    {readOnly && (
                        <Text>{major}</Text>
                    )}
                </View>

                <View style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Minor</Text>
                    {!readOnly && (
                        <TextInput
                            style={styles.textInput}
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
                            style={styles.textInput}
                        />)}

                    {readOnly && (
                        <Text>{campus}</Text>
                    )}
                </View>

                <View style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Email</Text>
                    {!readOnly && (
                        <TextInput
                            style={styles.textInput}
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