import { StyleSheet } from 'react-native';

const gameStyles = StyleSheet.create({
    gameContainer: {
        width: 80,
        height: 120,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    
    gameText: {
        fontText: 24,
        fontWeight: 'Bold',
        color: 'white',
    }
});

export default gameStyles;