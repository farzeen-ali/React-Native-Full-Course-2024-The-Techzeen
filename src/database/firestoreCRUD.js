/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';

export const addUserData = async (userData) => {
    try {
        await firestore().collection('users').add(userData);
        console.log('User added Successfully!');
    } catch (error) {
        console.error('Error adding user data: ', error);
    }
};

export const getUsers = async () => {
    try {
        const usersSnapshot = await firestore().collection('users').get();
        const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('Fetched Users: ', users);
        return users;
    } catch (error) {
        console.error('Error fetching data: ', error);
        return [];
    }
};

export const updateUser = async (id, updatedData) => {
    try {
        await firestore().collection('users').doc(id).update(updatedData);
        console.log('User updated Successfully!');
    } catch (error) {
        console.error('Error updating user data: ', error);
    }
};

export const deleteUser = async (id) => {
    try {
        await firestore().collection('users').doc(id).delete();
        console.log('User deleted Successfully!');
    } catch (error) {
        console.error('Error deleting user data: ', error);
    }
};
