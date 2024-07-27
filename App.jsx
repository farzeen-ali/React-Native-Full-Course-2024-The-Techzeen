/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Button, Text, View } from 'react-native';
import First from './src/components/First';
const App = () => {
  return (
    <View>
      <Text style={ { fontSize : 30 } }>React Native Mobile APP Developer</Text>
      <Text style={ { fontSize : 30 } }>Farzeen Ali</Text>
      <Button title="Press Here" />
      <First />
      <First />
      <First />
      <First />
    </View>
  );
};


// const First = () => {
//   return (
//     <View>
//       <Text style={ { fontSize : 30 } }>React Native</Text>
//     </View>
//   );
// };


export default App;
