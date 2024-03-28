


import React, { useState, useEffect } from 'react';
import { View, Button, Text, Vibration, Alert } from 'react-native';
import Board from './Board';
import gameStyles from '../Styles/GameStyle.js';
import ImagePicker from 'react-native-image-picker';
import Victory from './victoryMessage.js';


const Game = () => {
    const initialCards = [
        { id: 1, value: 'A', isFlipped: false },
        { id: 2, value: 'B', isFlipped: false },
        { id: 3, value: 'C', isFlipped: false }, 
        { id: 4, value: 'D', isFlipped: false }, 
        { id: 5, value: 'E' , isFlipped: false},
        { id: 6, value: 'F', isFlipped: false},
        { id: 7, value: 'A', isFlipped: false},
        { id: 8, value: 'B', isFlipped: false},
        { id: 9, value: 'C', isFlipped: false},
        { id: 10, value: 'D', isFlipped: false},
        { id: 11, value: 'E', isFlipped: false },
        { id: 12, value: 'F', isFlipped: false},
    ];

    const [cards, setCards] = useState(initialCards);
    const [selectedCardIds, setSelectedCardIds] = useState([]);
    const [matchedCardIds, setMatchedCardIds] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState(0);
    const [showVictory, setVictory] = useState(false);

   
    useEffect(() => {
        shuffleCards();
    }, []); 


    // Card RNG 
    const shuffleCards = () => {
        const shuffledCards = [...initialCards];
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }
        setCards(shuffledCards);
    };

    // Game logic for handling card clicks and matches
    const handleCardPress = (id) => {
        

        if (!selectedCardIds.includes(id) && selectedCardIds.length < 2) {
            const updatedCards = cards.map((card) =>
                card.id === id ? { ...card, isFlipped: true } : card
            );
            setCards(updatedCards);
            setSelectedCardIds([...selectedCardIds, id]);

            if (selectedCardIds.length === 1) {
                const selectedCard = cards.find((card) => card.id === selectedCardIds[0]);
                // when Match found
                if (selectedCard.value === cards.find((card) => card.id === id).value) {
                   Vibration.vibrate();
                    setMatchedCardIds([...matchedCardIds, id, selectedCardIds[0]]);
                    setMatchedPairs(matchedPairs + 1);
                    setSelectedCardIds([]);
                } else {
                    // No match, flip back after a delay
                    setTimeout(() => {
                        const flippedBackCards = cards.map((card) =>
                            selectedCardIds.includes(card.id) ? { ...card, isFlipped: false } : card
                        );
                        setCards(flippedBackCards);
                        setSelectedCardIds([]);
                    }, 1000);
                }
            }
        }
    };
    // Vibrates when winning
    useEffect(() => {
        if (matchedPairs === cards.length / 2) {
            //setVictory(true);

            Vibration.vibrate(500);

            console.log("victory?")

            Alert.alert(
                'VICTORY!',
                'MEMORY MATCHED!',
                [{ text: 'Restart', onPress: handleRestartGame }],
                { cancelable: false }
            );
        }
    }, [matchedPairs, cards.length]);

    // Reset game 
    const handleRestartGame = () => {
        
        setCards(initialCards);
        shuffleCards();
        setSelectedCardIds([]);
        setMatchedCardIds([]);
        setMatchedPairs(0);
        //setVictory(false);
    };

    return (
        <View style={gameStyles.container}>
        <Text> MEMORY MATCH! </Text>
            
            <View style={gameStyles.boardContainer}>
                <Board cards={cards} onCardPress={handleCardPress} />
            </View>
            <View style={gameStyles.buttonContainer}>
                {/* Optional: Add restart game button */}
                <Button title="Restart Game" onPress={handleRestartGame} />
                <Victory visible={showVictory} onClose={() => setVictory(false)} />
            </View>
           
        </View>
    );
};



export default Game;