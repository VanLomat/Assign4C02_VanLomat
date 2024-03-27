import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Board from './components/Board';
import gameStyles from './Styles/GameStyles'; // Import styles from external stylesheet

const Game = () => {
    const [cardsData, setCardsData] = useState([
        { id: 1, value: 'A' },
        { id: 2, value: 'B' },
        { id: 3, value: 'C' },
        { id: 4, value: 'D' },
        // Add more cards as needed
    ]);

    const handleRestartGame = () => {
        // Reset game state
        setCardsData(initialCardsData);
        // Reset any other game-related state
    };

    return (
        <View style={gameStyles.container}>
            <Board cardsData={cardsData} />
            <Button title="Restart Game" onPress={handleRestartGame} />
        </View>
    );
};

export default Game;