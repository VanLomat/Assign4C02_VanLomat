import React, { useState } from 'react';
import { View } from 'react-native';
import Card from './components/Card.js';
import boardStyles from './Styles/BoardStyle.js';

const Board = ({ cardData }) => {
    const [flippedCard, setFlippedCard] = useState([]);

    const handleCardPress = (index) => {
        const newFlippedCard = [...flippedCard];
        newFlippedCard[index] = !newFlippedCard[index];
        setFlippedCard(newFlippedCard);
    }

    return (
        <View style={boardStyles.boardContainer}>
            {cardData.map((cardData, index) => (
                <Card
                    key={index}
                    value={cardData.value}
                    isFlipped={flippedCard[index]}
                    onCardPress={() => handleCardPress(index)}
                />
            ))}
        </View>

    );

};

export default Board;