import { StyleSheet } from 'react-native';

const gameStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    boardContainer: {
        marginBottom: 400, // Add margin bottom to create space between board and button
    },
    buttonContainer: {
        marginBottom: 20, // Add margin bottom to create space between board and button
    },
});

export default gameStyles;