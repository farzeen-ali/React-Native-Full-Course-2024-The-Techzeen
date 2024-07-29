/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React from 'react';

const OnPress = () => {
    let name = 'Farzeen';
    const getName = () => {
        name = 'Huzaifa';
        console.warn('Name: ', name);
    };
  return (
    <View>
      <Text style={ { fontSize : 30 } }>{name}</Text>
      <Button title="Press" onPress={getName} />
      {/* <Button title="Press" onPress={() => getName('Farzeen')} /> */}
    </View>
  );
};

export default OnPress;
