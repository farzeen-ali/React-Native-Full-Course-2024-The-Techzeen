/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import My from './My';

const HideShowToggle = () => {
    const [status, setStatus] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 30}}>HideShowToggle</Text>
      {
        status ? <My /> : null
      }
      <Button title="Hide" onPress={() => setStatus(false)} />
      <Button title="Show" onPress={() => setStatus(true)} />
      <Button title="Toggle" onPress={() => setStatus(!status)} />
    </View>
  );
};

export default HideShowToggle;
