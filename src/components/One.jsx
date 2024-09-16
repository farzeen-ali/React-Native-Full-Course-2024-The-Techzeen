/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';
import Two from './Two';

const One = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24}}>One</Text>
      <Two />
    </View>
  );
};

export default One;
