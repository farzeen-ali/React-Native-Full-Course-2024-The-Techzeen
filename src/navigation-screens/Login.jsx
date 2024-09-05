/* eslint-disable prettier/prettier */
import { View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
  return (
    <View>
      <TextInput
        placeholder="Enter username"
        onChangeText={setUsername}
      />
      <Button title="Login"
    //   onPress={() => navigation.navigate('About', {username: 'Farzeen', age: 22})} />
      onPress={() => navigation.navigate('About', {username})} />
    </View>
  );
};

export default Login;
