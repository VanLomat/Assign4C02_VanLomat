

import React from 'react';
import { View } from 'react-native';
import Card from './Card';
import boardStyles from '../Styles/BoardStyle.js';

const Board = ({ cards, onCardPress }) => {
    return (
        <View style={boardStyles.board}>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    value={card.value}
                    isFlipped={card.isFlipped}
                    onCardPress={onCardPress}
                />
            ))}
        </View>
    );
};

export default Board;