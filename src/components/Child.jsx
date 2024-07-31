/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';

const Child = (props) => {
    // console.log(props.data);
    let count = props.data;
    let items = props.item;
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Child</Text>
      {/* <Text style={{ fontSize: 30 }}>{props.data}</Text> */}
      <Text style={{ fontSize: 30 }}>{count}</Text>
      <Text style={{ fontSize: 30 }}>{items}</Text>
    </View>
  );
};

export default Child;
