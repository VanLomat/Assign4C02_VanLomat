import { StyleSheet } from 'react-native';

const cardStyles = StyleSheet.create({
    cardContainer: {
        width: 80,
        height: 120,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    flippedCard: {
        backgroundColor: 'white'
    },
    cardText: {
        fontText: 24,
        fontWeight: 'Bold',
        color: 'white',
    }
});

export default cardStyles;