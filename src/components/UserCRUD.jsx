/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Alert, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
// import { addUserData, deleteUser, getUsers, updateUser } from '../database/firestoreCRUD';
import { addUserData, deleteUser, getUsers, updateUser } from '../database/realtimeCRUD';

const UserCRUD = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [users, setUsers] = useState([]);
    const [editId, setEditId] = useState(null);

    const fetchUsers = async () => {
        try {
        const userList = await getUsers();
        setUsers(userList);
        } catch (error) {
            Alert.alert('Error ', error.message);
        }
    };
    useEffect(()=> {
        fetchUsers();
    }, []);
    const handleSubmit = async () => {
        if(!name || !email || !phone){
            Alert.alert('Error', 'Please fill all the fields');
            return;
        }
        const userData = { name, email, phone };
        try {
            if(editId){
                await updateUser(editId, userData);
                Alert.alert('Success', 'User Updated Successfully');
            }
            else {
                await addUserData(userData);
                Alert.alert('Success', 'User Added Successfully');
            }
            setName('');
            setEmail('');
            setPhone('');
            setEditId(null);
            fetchUsers();
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };
    const handleDelete = async (id) => {
        try {
           await deleteUser(id);
           Alert.alert('Success', 'User Deleted Successfully');
            fetchUsers();
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };
    const handleEdit = (user) => {
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
        setEditId(user.id);
    };
  return (
    <View className="flex-1 bg-gray-200 p-8">
        <View className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto">
            <Text className="text-3xl font-bold text-blue-600 mb-8 text-center">{editId ? 'Edit User' : 'Add User'}</Text>
        <TextInput
            placeholder="Name"
            className="border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-blue-500"
            value={name}
            onChangeText={setName}
        />
        <TextInput
            placeholder="Email"
            className="border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-blue-500"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
        />
        <TextInput
            placeholder="Phone"
            className="border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-blue-500"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
        />
        <TouchableOpacity className="bg-blue-600 p-4 rounded-lg" onPress={handleSubmit}>
            <Text className="text-white text-center font-semibold text-lg">{editId ? 'Update' : 'Add'} User</Text>
        </TouchableOpacity>
        </View>
        <FlatList
            data={users}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View className="bg-white p-4 mt-4 rounded-lg shadow-lg w-full max-w-md mx-auto flex-row justify-between items-center">
                    <View>
                        <Text className="text-lg font-semibold text-gray-800">{item.name}</Text>
                        <Text className=" text-gray-800">{item.email}</Text>
                        <Text className=" text-gray-800">{item.phone}</Text>
                    </View>
                    <View className="flex-row">
                        <TouchableOpacity className="bg-green-500 p-2 rounded-lg mr-2" onPress={() => handleEdit(item)}>
                            <Text className="text-white">Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-red-500 p-2 rounded-lg mr-2" onPress={() => handleDelete(item.id)}>
                            <Text className="text-white">Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            ListEmptyComponent={<Text className="text-center text-gray-500 mt-4">No User Found</Text>}
            contentContainerStyle={{ paddingBottom: 20 }}
        />
    </View>
  );
};

export default UserCRUD;
