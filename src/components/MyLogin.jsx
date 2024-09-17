/* eslint-disable prettier/prettier */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const MyLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <View className="flex-1 justify-center items-center bg-gray-900 p-5">
      <Text className="text-4xl font-bold text-white mb-8">Welcome Back!</Text>
      <TextInput
        placeholder="Enter your email"
        placeholderTextColor={'#ccc'}
        className="w-full h-12 bg-gray-800 rounded-lg text-white px-4 mb-4"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Enter your password"
        placeholderTextColor={'#ccc'}
        className="w-full h-12 bg-gray-800 rounded-lg text-white px-4 mb-4"
        value={password}
        onChangeText={setPassword}
       secureTextEntry
      />
      <TouchableOpacity className="w-full bg-indigo-500 py-3 rounded-lg">
        <Text className="text-center text-white text-lg font-semibold">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity className="mt-4">
        <Text className="text-indigo-300 text-center">Forgot Password</Text>
      </TouchableOpacity>
    <View className="mt-6 flex-row justify-center">
        <Text className="text-indigo-300 text-center">Don't have an account?</Text>
        <TouchableOpacity>
            <Text className="text-indigo-300">Sign up</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};

export default MyLogin;
