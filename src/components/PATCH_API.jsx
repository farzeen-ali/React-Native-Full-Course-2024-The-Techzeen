/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const PATCH_API = () => {
    const [formData, setFormData] = useState({ id: '', name: '', email: '' });
    const handleInput = (field, value) => {
        setFormData({...formData, [field] : value });
    };
    const handleUpdate = async () => {
        try {
            const response = await axios.patch(`http://10.0.2.2:3000/users/${formData.id}`, {
               ...formData.name &&  {name: formData.name},
               ...formData.email &&  {email: formData.email},
            });
            Alert.alert('Success', 'Data updated Successfully');
            console.log(response.data);
            setFormData({ id: '', name: '', email: '' });
        } catch (error) {
            Alert.alert('Error', 'Failed to update data');
        }
    };
  return (
    <View>
      <Text style={{fontSize: 20, marginBottom: 10, textAlign: 'center'}}>PATCH_API</Text>
      <TextInput
        placeholder="Enter ID"
        value={formData.id}
        onChangeText={(value) => handleInput('id', value)}
      />
      <TextInput
        placeholder="Enter Name"
        value={formData.name}
        onChangeText={(value) => handleInput('name', value)}
      />
      <TextInput
        placeholder="Enter Email"
        onChangeText={(value) => handleInput('email', value)}
        value={formData.email}
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default PATCH_API;
