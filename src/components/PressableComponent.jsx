/* eslint-disable prettier/prettier */
import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const PressableComponent = () => {
    const handlePress = () => {
        console.log('On Press');
    };
    const handlePressIn = () => {
        console.log('Press In');
    };
    const handlePressOut = () => {
        console.log('Press Out');
    };
    const handleLongPress = () => {
        console.log('Press Long');
    };
  return (
    <View style={styles.container}>
      <Pressable
      style={styles.button}
    onPress={handlePress}
    onPressIn={handlePressIn}
    onPressOut={handlePressOut}
    onLongPress={handleLongPress}
    delayLongPress={5000}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>
    </View>
  );
};

export default PressableComponent;
const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#007bff',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
});
