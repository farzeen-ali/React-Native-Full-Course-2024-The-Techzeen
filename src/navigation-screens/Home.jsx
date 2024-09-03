/* eslint-disable prettier/prettier */
import { View, Text, Button } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to About Screen" onPress={()=> navigation.navigate('About')} />
    </View>
  );
};

export default Home;
