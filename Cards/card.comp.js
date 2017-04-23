import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        borderWidth: 10,
        borderStyle: "solid",
        borderRadius: 20,
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
    }
});

const TileCard = ({
    title,
    imageUrl,
    borderColor
}) => {
    styles.card[borderColor] = borderColor;

    return (
        <View style={styles.card}>
            <Image
                source={{ uri: imageUrl }}
                alt={title}
                style={{ width: "100%", height: 300 }}
            />
            <Text style={styles.cardText}>{title}</Text>
        </View>
    );
};

export default TileCard;
