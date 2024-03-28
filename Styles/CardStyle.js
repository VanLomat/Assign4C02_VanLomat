import { StyleSheet } from 'react-native';

const cardStyle = StyleSheet.create({
   
    container: {
        width: 80,
        height: 150,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 5,
        
    },
    cardFace: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backfaceVisibility: 'hidden',
    },
    cardFaceFront: {
        backgroundColor: '#fff',
    },
    cardFaceBack: {
        backgroundColor: '#ccc',
    },
    cardText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default cardStyle;