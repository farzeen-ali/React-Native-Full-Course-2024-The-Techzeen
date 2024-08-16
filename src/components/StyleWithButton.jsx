/* eslint-disable prettier/prettier */
import { View, Text, Button, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import React from 'react';

const StyleWithButton = () => {
  return (
    <View>
     <Button title="Basic Button" color={'red'} />
     <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Touchable Opacity</Text>
     </TouchableOpacity>
     <TouchableHighlight style={styles.button} underlayColor="#3A1078" onPress={() => {
        console.log('Hello');
     }} >
        <Text style={styles.buttonText}>Touchable Highlight</Text>
     </TouchableHighlight>
    </View>
  );
};

export default StyleWithButton;

const styles = StyleSheet.create({
    button : {
        margin: 20,
        backgroundColor : '#4E31AA',
        padding: 20,
        borderRadius: 25,
        elevation: 5,
    },
    buttonText : {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
