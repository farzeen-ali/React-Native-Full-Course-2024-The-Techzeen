/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const InputText = () => {
    const [username, setUserName] = useState('');
  return (
    <View>
      <Text style={ {fontSize: 30} }>InputText</Text>
      <Text style={ {fontSize: 30} }>Username: {username} </Text>
      <TextInput style={ {fontSize: 20, borderWidth: 2, borderColor: 'green', margin: 10} } value={username} placeholder="Enter Your Username" onChangeText={(data) => setUserName(data)} />
      <Button title="Clear" onPress={() => setUserName('')} />
    </View>
  );
};

export default InputText;
