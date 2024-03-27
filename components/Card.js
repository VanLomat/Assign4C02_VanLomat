import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import cardStyle from './Styles/CardStyle.js';

const Card = ({ value, isFlipped, onCardPress }) => {
    return (
        <TouchableOpacity onPress={onCardPress}>
            <View style={[cardStyle.cardContainer, isFlipped && cardStyle.flippedCard] }>
                {
                    isFlipped ? (
                        <Text style={cardStyle.cardText}>{value}</Text>
                    ) : (
                        <Text style={cardStyle.cardText}></Text>
                    )
                }

            </View>
            
        </TouchableOpacity>

    );

};

export default Card;
