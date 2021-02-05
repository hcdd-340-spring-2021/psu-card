import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Colors, Metrics } from '../Themes';

const ProfileView = (profile) => {
    return (
        <View style={styles.card}>

            <View style={styles.pictureView}>
                <Image style={styles.picture}
                    source={profile.image} />

                <View style={styles.pictureDetails}>
                    <Text style={{ fontWeight: 'bold' }}>{profile.name}</Text>
                    <Text style={{ fontWeight: '500' }}>{profile.id}</Text>
                </View>
            </View>

            <View style={styles.profileRowItem}>

                <View style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Year</Text>
                    <Text>{profile.year}</Text>
                </View>

                <View style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Major</Text>
                    <Text>{profile.major}</Text>
                </View>

                <View style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Minor</Text>
                    <Text style>{profile.minor}</Text>
                </View>
            </View>

            <View style={styles.profileRowItem}>
                <View style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Campus</Text>
                    <Text>{profile.campus}</Text>
                </View>

                <View style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Email</Text>
                    <Text>{profile.email}</Text>
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
    }
});

export default ProfileView;