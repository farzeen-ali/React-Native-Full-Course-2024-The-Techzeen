/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const AnimatedCardFlip = () => {
    const flip = useSharedValue(0);

    const frontImage = require('../images/front.jpg');
    const backImage = require('../images/back.jpg');

    const animatedStyleFront = useAnimatedStyle(() => {
        return{
            transform: [
                { perspective: 1000 },
                { rotateY: `${flip.value}deg` },
            ],
            opacity: flip.value < 90 ? 1 : 0,
        };
    });
    const animatedStyleBack = useAnimatedStyle(() => {
        return{
            transform: [
                { perspective: 1000 },
                { rotateY: `${flip.value + 180}deg` },
            ],
            opacity: flip.value >= 90 ? 1 : 0,
        };
    });
    const handleFlip = () => {
        flip.value = withSpring(flip.value === 0 ? 180 : 0);
    };
  return (
    <View className="flex-1 justify-center items-center bg-[#f0f4f8]">
      <View className="w-64 h-64 relative">
        <Animated.View
            style={[animatedStyleFront]}
            className="absolute w-full h-full bg-white rounded-3xl shadow-xl justify-center items-center"
        >
            <Image
                source={frontImage}
                className="w-56 h-36 rounded-lg"
                resizeMode="cover"
            />
            <Text className="text-lg font-semibold mt-3 text-[#333]">Product Title - Item Front</Text>
            <Text className="text-sm text-gray-600 mt-1">This is front side</Text>
        </Animated.View>
        <Animated.View
            style={[animatedStyleBack]}
            className="absolute w-full h-full bg-white rounded-3xl shadow-xl justify-center items-center"
        >
            <Image
                source={backImage}
                className="w-56 h-36 rounded-lg"
                resizeMode="cover"
            />
            <Text className="text-lg font-semibold mt-3 text-[#333]">Product Title - Item Back</Text>
            <Text className="text-sm text-gray-600 mt-1">This is back side</Text>
        </Animated.View>
      </View>
      <TouchableOpacity onPress={handleFlip} className="mt-8 px-8 py-3 bg-[#4a90e2] rounded-lg shadow-md">
        <Text className="text-white text-lg font-semibold">Flip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedCardFlip;
