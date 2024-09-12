/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const ImageExample = () => {
  // Store image sources in variables
  const localImage = require('../images/React.png');
  const remoteImage = { uri: 'https://www.visual-craft.com/static/86b4a37121c83372d45b5f4878caccf1/8e4fb/React_Native_2_c5ab49be9b.png' };
  const backgroundImage = { uri: 'https://qubited.com/wp-content/uploads/2023/02/react-native-1280x640.png' };

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Content on top of the background */}
      <View style={styles.content}>
        <Text style={styles.text}>Hello, World!</Text>

        {/* Local and Remote Images */}
        <Image
          source={localImage}
          style={styles.image}
          resizeMode="cover"
        />
        <Image
          source={remoteImage}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default ImageExample;
