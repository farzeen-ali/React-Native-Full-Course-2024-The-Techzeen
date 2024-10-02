/* eslint-disable prettier/prettier */
import { View, Text, Switch } from 'react-native';
import React, { useState } from 'react';

const SwitchUI = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View className={`flex-1 justify-center items-center ${isEnabled ? 'bg-black' : 'bg-white'}`}>
      <Text className={`text-lg mb-4 ${isEnabled ? 'text-white' : 'text-black'}`}>Switch is {isEnabled ? 'On' : 'Off'}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{transform : [{ scaleX : 1.5}, {scaleY: 1.5}]}}
      />
    </View>
  );
};

export default SwitchUI;
