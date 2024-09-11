/* eslint-disable prettier/prettier */
import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample = () => {
  const [username, setUsername] = useState('');
  const [storedUsername, setStoredUsername] = useState('');
  const saveUsername = async () => {
    await AsyncStorage.setItem('username', username);
    setUsername('');
    Alert.alert('Username Saved');
  };
  const getUsername = async () => {
   const savedUsername =  await AsyncStorage.getItem('username');
    if(savedUsername) {
      setStoredUsername(savedUsername);
    }
    else {
      Alert.alert('Username Not Found');
    }
  };
  const removeUsername = async () => {
    await AsyncStorage.removeItem('username');
    setStoredUsername('');
    Alert.alert('Username Removed');
  };
  useEffect(() => {
    getUsername();
  }, []);
  return (
    <View>
      <TextInput
      placeholder="Enter username"
      value={username}
      onChangeText={setUsername}
      />
      <Button title="Save Username" onPress={saveUsername} />
      <Button title="Get Username" onPress={getUsername}  />
      <Button title="Remove Username" onPress={removeUsername} />
      <Text>Stored Username: {storedUsername}  </Text>
    </View>
  );
};

export default AsyncStorageExample;


