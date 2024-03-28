import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import cardStyle from '../Styles/CardStyle.js';

const Card = ({ id, value, isFlipped, onCardPress }) => {
    const [animatedValue] = useState(new Animated.Value(0));

    useEffect(() => {
        if (isFlipped) {
            // Animate card flipping
            Animated.timing(animatedValue, {
                toValue: 180,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start();
        } else {
            // Animate card flipping back
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 300,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start();
        }
    }, [isFlipped]);

    //const frontInterpolate = animatedValue.interpolate({
    //    inputRange: [0, 180],
    //    outputRange: ['0deg', '180deg'],
    //});

    //const backInterpolate = animatedValue.interpolate({
    //    inputRange: [0, 180],
    //    outputRange: ['180deg', '360deg'],
    //});

    //const frontAnimatedStyle = {
    //    transform: [{ rotateY: frontInterpolate }],
    //};

    //const backAnimatedStyle = {
    //    transform: [{ rotateY: backInterpolate }],
    //};
    const rotateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });
    
    return (
        <TouchableOpacity onPress={()=> onCardPress(id)}>
            <Animated.View style={[cardStyle.cardContainer, { transform: [{ rotateY }] }]}>
                {
                    //isFlipped ? (
                    //    <Text style={cardStyle.cardText}>{value}</Text>
                    //) : (
                    //    <Text style={cardStyle.cardText}></Text>
                    //)   
                    <Text style={cardStyle.cardText}>{isFlipped ? value : '?'}</Text>
                }

            </Animated.View>
            
        </TouchableOpacity>

    );

};

export default Card;
