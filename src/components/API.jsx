/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const API = () => {
  useEffect(() => {
    axios.get('http://10.0.2.2:3000/users')
      .then((response) => {
        console.log(response.data); // Console me data dikhana
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View>
      <Text>API Data Fetch Example</Text>
    </View>
  );
};

export default API;
