/* eslint-disable prettier/prettier */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/navigation-screens/Home';
import About from './src/navigation-screens/About';
import Login from './src/navigation-screens/Login';
import { Alert, Button, StyleSheet } from 'react-native';
import MyHeader from './src/navigation-screens/MyHeader';
import Example from './src/navigation-screens/Example';

const Stack = createNativeStackNavigator();

// const sayHello = () => {
//   Alert.alert('Hello', 'Hello User');
// };

// const HeaderTitle = () => <Button title="One" color="red" onPress={sayHello} />;
// const HeaderRight = () => <Button title="Two" color="green" onPress={sayHello} />;
const MyExample = () => <Example />;

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
        <Stack.Screen name="Header" component={MyHeader}
        options={{
          title: '',
          // headerTitle: () => <Button title="One" color="red" />,
          // headerRight: () => <Button title="Two" color="green"  />
          // headerTitle: HeaderTitle,
          // headerRight: HeaderRight,
          headerTitle: MyExample,
        }}
        />
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
