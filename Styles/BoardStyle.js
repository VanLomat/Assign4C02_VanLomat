import { StyleSheet } from 'react-native';

const boardStyles = StyleSheet.create({
    boardContainer: {
        width: 80,
        height: 120,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },

    boardText: {
        fontText: 24,
        fontWeight: 'Bold',
        color: 'white',
    }
});

export default boardStyles;