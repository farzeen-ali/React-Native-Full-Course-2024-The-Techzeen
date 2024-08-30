/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const DELETE_API = () => {
    const [id, setID] = useState();
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://10.0.2.2:3000/users/${id}`);
            Alert.alert('Success!', 'Data Deleted Successfully!');
            console.log(response.data);
            setID('');
        } catch (error) {
            Alert.alert('Error','Failed to delete data');
        }
    };
  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 10, textAlign: 'center'}}>DELETE_API</Text>
      <TextInput
        placeholder="Enter ID"
        value={id}
        onChangeText={(value) => setID(value)}
      />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

export default DELETE_API;
