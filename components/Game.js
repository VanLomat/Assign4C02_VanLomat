import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Board from './Board.js';
import gameStyles from '../Styles/GameStyle.js'; // Import styles from external stylesheet

const Game = () => {
    const initialCardData = [
        { id: 1, value: 'A', isFlipped: false },
        { id: 2, value: 'B', isFlipped: false },
        { id: 3, value: 'C', isFlipped: false },
        { id: 4, value: 'D', isFlipped: false },
        { id: 5, value: 'E', isFlipped: false },
        { id: 6, value: 'F', isFlipped: false },
        { id: 7, value: 'G', isFlipped: false },
        { id: 8, value: 'H', isFlipped: false },
        { id: 9, value: 'I', isFlipped: false },
        { id: 10, value: 'J', isFlipped: false },
        { id: 11, value: 'K', isFlipped: false },
        { id: 12, value: 'L', isFlipped: false },
        
   ];
    const [cardData, setCardData] = useState([
        { id: 1, value: 'A', isFlipped: false },
        { id: 2, value: 'B', isFlipped: false },
        { id: 3, value: 'C', isFlipped: false },
        { id: 4, value: 'D', isFlipped: false },
        { id: 5, value: 'E', isFlipped: false },
        { id: 6, value: 'F', isFlipped: false },
        { id: 7, value: 'G', isFlipped: false },
        { id: 8, value: 'H', isFlipped: false },
        { id: 9, value: 'I', isFlipped: false },
        { id: 10, value: 'J', isFlipped: false },
        { id: 11, value: 'K', isFlipped: false },
        { id: 12, value: 'L', isFlipped: false },
    ]);

   

    const [flippedCard, setFlippedCard] = useState([]);
    const [matchedCard, setMatchedCard] = useState([]);

    const handleCardPress = (id) => {
        if (flippedCard.includes(id) || matchedCard.includes(id))
            return;
        setFlippedCard([...flippedCard, id]);
    }

    useEffect(() => {
        // Check for card match
        if (flippedCard.length === 2) {
            const [firstCard, secondCard] = flippedCard;
            if (cardData[firstCard - 1].value === cardData[secondCard - 1].value) {
                // Cards matched, add them to matchedCards
                setMatchedCard([...matchedCards, firstCard, secondCard]);
            }
            // Clear flippedCards after checking for match
            setFlippedCard([]);
        }
    }, [flippedCard]);

    const handleRestartGame = () => {
        // Reset game state
        setCardData(initialCardData);
        setFlippedCard([]);
        setMatchedCard([]);
        // Reset any other game-related state
        console.log('Restart game button pressed');
    };

    return (
        <View style={gameStyles.container}>
            <Board cardData={cardData} flippedCard={flippedCard} onCardPress={handleCardPress} />
            <Button title="Restart Game" onPress={handleRestartGame} />
        </View>
    );
};

export default Game;