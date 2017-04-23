import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import getColors from './Actions/determineColors.action';

const TileCard = ({
    title,
    imageUrl,
    borderColor
}) => {
    const styles = StyleSheet.create({
        card: {
            borderWidth: 10,
            borderStyle: "solid",
            borderRadius: 15,
            borderColor: '#ececec',
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 10,
            marginBottom: 10
        },
        cardText: {
            textAlign: "center",
            width: "80%",
            fontSize: 25,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 10
        },
        cardImage: {
            width: "100%",
            height: 300
        },
        imageContainer: {
            padding: 10
        }
    });

    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: imageUrl }}
                    alt={title}
                    rel={(image) => { this.image = image; }}
                    onLoad={(asdf) => { console.log(asdf) }}
                    style={styles.cardImage}
                />
            </View>
            <Text style={styles.cardText}>{title}</Text>
        </View>
    );
};

export default TileCard;
