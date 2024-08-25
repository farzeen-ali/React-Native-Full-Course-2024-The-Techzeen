/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GET_API = () => {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        // fetch('http://10.0.2.2:3000/users').then((response) => {
        //     response.json().then((result) => {
        //         console.log(result);
        //     });
        // });
        axios.get('http://10.0.2.2:3000/users').then((result) => {
            // console.log(result.data);
            setMyData(result.data);
        });
    }, []);
  return (
    <View>
      <Text style={{fontSize: 24, marginBottom: 10}}>GET API METHOD</Text>
      {
        myData.map((item) => (
            <Text key={item.id} style={{fontSize: 20, marginBottom: 10}}>{item.name}</Text>
        ))
      }
    </View>
  );
};

export default GET_API;
