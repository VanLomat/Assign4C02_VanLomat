import { StyleSheet } from 'react-native';

const cardStyle = StyleSheet.create({
    cardContainer: {
        width: 80,
        height: 120,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backfaceVisibility: 'hidden',
    },
    flippedCard: {
        backgroundColor: 'white'
    },
    cardText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default cardStyle;