/* eslint-disable prettier/prettier */
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { sendPasswordResetEmail } from '../services/auth';

const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState('');
    const handleForgotPassword = async () => {
        if(!email){
            Alert.alert('Error', 'Please enter your email address');
            return;
        }
        try {
            await sendPasswordResetEmail(email);
            Alert.alert('Success!', 'Password reset link sent to your email address');
            setEmail('');
        } catch (error) {
            Alert.alert('Error: ', error.message);
        }
    };
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
        <View className="bg-white p-8 rounded-lg shadow-lg w-96">
            <Text className="text-3xl font-bold text-pink-600 mb-8 text-center">Forgot Password</Text>
            <TextInput
                className="border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-pink-500"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TouchableOpacity className="bg-pink-600 p-4 rounded-lg">
                <Text className="text-white text-center font-semibold text-lg" onPress={handleForgotPassword}>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity className="mt-4" onPress={() => navigation.navigate('Login')}>
                <Text className="text-center text-pink-600">Back To Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default ForgotPassword;
