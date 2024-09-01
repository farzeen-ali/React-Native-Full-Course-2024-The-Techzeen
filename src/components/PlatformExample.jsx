/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';

const PlatformExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{
        Platform.OS === 'ios' ? 'Welcome IOS User!' : 'Welcome Android User!'
      }</Text>
      <Text style={styles.platformText}>
        {
            Platform.select({
                ios : 'You are using IOS Device',
                android : 'You are using Android Device',
                macos : 'You are using MacOS',
            })
        }
      </Text>
    </View>
  );
};

export default PlatformExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Platform.select({
            ios: 'lightblue',
            android: 'lightgreen',
        }),
    },
    welcomeText: {
        fontSize: 24,
        color: Platform.OS === 'ios' ? 'blue' : 'green',
        marginBottom: 20,
    },
    platformText: {
        fontSize: 18,
        color: '#000',
    },
});
