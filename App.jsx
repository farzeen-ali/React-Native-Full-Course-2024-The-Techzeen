/* eslint-disable prettier/prettier */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/navigation-screens/Home';
import About from './src/navigation-screens/About';
import Login from './src/navigation-screens/Login';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: '#fff',
          contentStyle: styles.screen,
        }}
      >
        <Stack.Screen name="Login" component={Login}
          // options={{
          //   title: 'My Login Form',
          //   headerTintColor: 'red',
          //   headerTitleStyle: {
          //     fontSize: 30,
          //     color: 'yellow',
          //   },
          //   headerStyle: {
          //     backgroundColor: 'red',
          //   },
          // }}
        />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200EE',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  screen: {
    backgroundColor: 'lightgreen',
  },
});
