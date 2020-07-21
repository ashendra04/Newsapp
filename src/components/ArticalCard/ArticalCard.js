import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native';
import moment from 'moment';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 200,
        marginTop: 10,
        marginBottom: 50,
    },
    image: {
        width: '100%',
        borderRadius: 5,
        aspectRatio: 16 / 9,
    },
    title: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

const ArticalCard = ({imageUrl, title, source, publishedAt}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: imageUrl,}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.bottomTextContainer}>
                <Text>{source}</Text>
                <Text>{moment(publishedAt).fromNow()}</Text>
            </View>
        </View>
    );
};

export default ArticalCard;
