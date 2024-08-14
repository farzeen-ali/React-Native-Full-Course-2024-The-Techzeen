/* eslint-disable prettier/prettier  */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

const ShowChild = () => {
    useEffect(() => {
        // console.log('Im a Child Component');
        return() => {
            console.log('Child Component Unmounted');
        };
    }, []);
  return (
    <View>
      <Text style={{ fontSize: 30}}>Child Component</Text>
    </View>
  );
};

export default ShowChild;
