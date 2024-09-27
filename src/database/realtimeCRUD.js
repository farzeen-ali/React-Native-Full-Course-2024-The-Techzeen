/* eslint-disable prettier/prettier */
import database from '@react-native-firebase/database';

export const addUserData = async (userData) => {
    try {
        const newRef = database().ref('/users').push();
        await newRef.set(userData);
        console.log('User Added Successfully!');
    } catch (error) {
        console.error('Error adding user data: ', error);
    }
};

export const getUsers = async () => {
    try {
        const snapshot = await database().ref('/users').once('value');
        const userData = snapshot.val() ? Object.entries(snapshot.val()).map(([id, data]) => ({id, ...data})) : [];
        console.log('Fetched Users: ', userData);
        return userData;
    } catch (error) {
        console.error('Error fetching user data: ', error);
    }
};

export const updateUser = async (id, updatedData) => {
    try {
        await database().ref(`/users/${id}`).update(updatedData);
        console.log('Users Data Updated Successfully!');
    } catch (error) {
        console.error('Error updating user data: ', error);
    }
};
export const deleteUser = async (id) => {
    try {
        await database().ref(`/users/${id}`).remove();
        console.log('Users Data Deleted Successfully!');
    } catch (error) {
        console.error('Error deleting user data: ', error);
    }
};

