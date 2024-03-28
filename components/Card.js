
import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
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
                    <Image source={require('../assets/vancard.png')} style={{ width: 100, height: 120 }} />
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