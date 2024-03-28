

//import React from 'react';
//import { Text, TouchableOpacity, View } from 'react-native';
//import cardStyle from '../Styles/CardStyle.js';
//import FlipCard from 'react-native-flip-card';

//const Card = ({ id, value, isFlipped, onCardPress }) => {
//    return (
//        <TouchableOpacity
//            style={[cardStyle.container, { backgroundColor: isFlipped ? '#ccc' : '#fff' }]}
//            onPress={() => onCardPress(id)}
//            activeOpacity={0.8}
//        >
//            <Text style={cardStyle.cardText}>{isFlipped ? value : '?'}</Text>
//        </TouchableOpacity>
//    );
//};

//export default Card;

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FlipCard from 'react-native-flip-card';
import cardStyle from '../Styles/CardStyle';

const Card = ({ id, value, isFlipped, onCardPress }) => {
    return (
        <TouchableOpacity onPress={() => onCardPress(id)}>
            <FlipCard
                style={cardStyle.container}
                friction={6}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                flip={isFlipped}
                clickable={false}
            >
                {/* Front Side */}
                <View style={[cardStyle.cardFace, cardStyle.cardFaceFront]}>
                    <Text style={cardStyle.cardText}>?</Text>
                </View>
                {/* Back Side */}
                <View style={[cardStyle.cardFace, cardStyle.cardFaceBack]}>
                    <Text style={cardStyle.cardText}>{isFlipped ? value : '?'}</Text>
                </View>
            </FlipCard>
        </TouchableOpacity>
    );
};

export default Card;