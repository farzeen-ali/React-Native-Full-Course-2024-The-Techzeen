/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const POST_API = () => {
    const [formData, setFormData] = useState({ id: '', name: '', email : '' });
    const handleInput = (field, value) => {
        setFormData({...formData, [field] : value });
    };
    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://10.0.2.2:3000/users', formData);
            Alert.alert('Success!', 'Data Submitted Successfully');
            console.log(response.data);
            setFormData({id: '', name: '', email : ''});
        } catch (error) {
            Alert.alert('Error', 'Failed to submit data');
        }
    };
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 30, marginBottom: 10}}>POST_API</Text>
      <TextInput
        placeholder="Enter ID"
        value={formData.id}
        onChangeText={(value) => handleInput('id',value)}
      />
      <TextInput
        placeholder="Enter Name"
        value={formData.name}
        onChangeText={(value) => handleInput('name',value)}
      />
      <TextInput
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={(value) => handleInput('email',value)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default POST_API;
