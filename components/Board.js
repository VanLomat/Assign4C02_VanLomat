import React, { useState } from 'react';
import { View } from 'react-native';
import Card from './Card.js';
import boardStyles from '../Styles/BoardStyle.js';

const Board = ({ cardData }) => {
    const [flippedCard, setFlippedCard] = useState([]);

    const handleCardPress = (id) => {
        //const newFlippedCard = [...flippedCard];
        //newFlippedCard[id] = !newFlippedCard[id];
        //setFlippedCard(newFlippedCard);
        if (flippedCard.includes(id)) return;

        setFlippedCard([...flippedCard, id]);
    }

    return (
        <View style={boardStyles.board}>
            {cardData.map((cardData) => (
                <Card
                    key={cardData.id}
                    id={cardData.id}
                    value={cardData.value}
                    isFlipped={flippedCard.includes(cardData.id)}
                    onCardPress={() => handleCardPress}
                />
            ))}
        </View>

    );

};

export default Board;