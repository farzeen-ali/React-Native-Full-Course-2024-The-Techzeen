/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React from 'react';
import { useCounterStore } from '../zustand/store';

const Two = () => {
    const {count, increment, decrement} = useCounterStore();
  return (
    <View>
      <Text style={{fontSize: 30}}>Counter: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement}  />
    </View>
  );
};

export default Two;
