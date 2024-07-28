/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';

const JSX = () => {
    let name = 'Farzeen';
    const getAge = () => {
        return 22;
    };
  return (
    <View>
      <Text style={ { fontSize : 30 } }>JSX</Text>
      <Text style={ { fontSize : 30 } }>{name}</Text>
      <Text style={ { fontSize : 30 } }>{5+3}</Text>
      <Text style={ { fontSize : 30 } }>{getAge()}</Text>
    </View>
  );
};

export default JSX;
