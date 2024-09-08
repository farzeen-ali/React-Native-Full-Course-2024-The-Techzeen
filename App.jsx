/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => (
  <View style={styles.screenContainer}>
    <Text style={styles.title}>Home Screen</Text>
    <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
  </View>
);
const ProfileScreen = ({ navigation }) => (
  <View style={styles.screenContainer}>
    <Text style={styles.title}>Profile Screen</Text>
    <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
  </View>
);
const SettingScreen = ({ navigation }) => (
  <View style={styles.screenContainer}>
    <Text style={styles.title}>Setting Screen</Text>
    <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#e6e6e6',
          width: 240,
        },
        drawerLabelStyle: {
          fontSize: 18,
          color: '#333',
        },
        headerStyle: {
          backgroundColor: '#6200EE',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 22,
    fontWeight:'bold',
    marginBottom: 20,
  },
});































// ************ Stack Navigation *****************

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React from 'react';
// import Home from './src/navigation-screens/Home';
// import About from './src/navigation-screens/About';
// import Login from './src/navigation-screens/Login';
// import { Alert, Button, StyleSheet } from 'react-native';
// import MyHeader from './src/navigation-screens/MyHeader';
// import Example from './src/navigation-screens/Example';

// const Stack = createNativeStackNavigator();

// // const sayHello = () => {
// //   Alert.alert('Hello', 'Hello User');
// // };

// // const HeaderTitle = () => <Button title="One" color="red" onPress={sayHello} />;
// // const HeaderRight = () => <Button title="Two" color="green" onPress={sayHello} />;
// const MyExample = () => <Example />;

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: styles.header,
//           headerTitleStyle: styles.headerTitle,
//           headerTintColor: '#fff',
//           contentStyle: styles.screen,
//         }}
//       >
//         <Stack.Screen name="Header" component={MyHeader}
//         options={{
//           title: '',
//           // headerTitle: () => <Button title="One" color="red" />,
//           // headerRight: () => <Button title="Two" color="green"  />
//           // headerTitle: HeaderTitle,
//           // headerRight: HeaderRight,
//           headerTitle: MyExample,
//         }}
//         />
//         <Stack.Screen name="Login" component={Login}
//           // options={{
//           //   title: 'My Login Form',
//           //   headerTintColor: 'red',
//           //   headerTitleStyle: {
//           //     fontSize: 30,
//           //     color: 'yellow',
//           //   },
//           //   headerStyle: {
//           //     backgroundColor: 'red',
//           //   },
//           // }}
//         />
//         <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
//         <Stack.Screen name="About" component={About} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#6200EE',
//   },
//   headerTitle: {
//     fontWeight: 'bold',
//     fontSize: 26,
//   },
//   screen: {
//     backgroundColor: 'lightgreen',
//   },
// });
