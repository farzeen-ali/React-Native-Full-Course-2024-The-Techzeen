/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';

const About = (props) => {
  // const {username, age} = props.route.params;
  const {username} = props.route.params;
  // console.log(props.route.params);
  return (
    <View>
      {/* <Text>{username} {age} </Text> */}
      <Text>Welcome {username} </Text>
    </View>
  );
};

export default About;
