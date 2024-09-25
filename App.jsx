/* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */

// import React from 'react';
// import { Button, Text, View } from 'react-native';
// import { View } from 'react-native';
// import ImageComponentExample from './src/components/ImageComponentExample';
// import Search from './src/components/Search';
// import AsyncStorageExample from './src/components/AsyncStorageExample';
// import PlatformExample from './src/components/PlatformExample';
// import GET_API_LIST from './src/components/GET_API_LIST';
// import DELETE_API from './src/components/DELETE_API';
// import PATCH_API from './src/components/PATCH_API';
// import POST_API from './src/components/POST_API';
// import PUT_API from './src/components/PUT_API';
// import GET_API from './src/components/GET_API';
// import AlertExample from './src/components/AlertExample';
// import ModalDialogBox from './src/components/ModalDialogBox';
// import UseRefHook from './src/components/UseRefHook';
// import StatusBarExample from './src/components/StatusBarExample';
// import PressableComponent from './src/components/PressableComponent';
// import Loader from './src/components/Loader';
// import StyleWithButton from './src/components/StyleWithButton';
// import HideShowToggle from './src/components/HideShowToggle';
// import UseEffectHookUnmountingPhase from './src/components/UseEffectHookUnmountingPhase';
// import UseEffectHook from './src/components/UseEffectHook';
// import UseEffectHookUpdatingPhase from './src/components/UseEffectHookUpdatingPhase';
// import ClassComponents from './src/components/ClassComponents';
// import Grid from './src/components/Grid';
// import ContactListScreen from './src/screens/Contact/ContactListScreen';
// import LoginForm from './src/components/LoginForm';
// import UserListScreen from './src/components/LoopList';
// import SectionListScreen from './src/components/SectionListScreen';
// import FlatListScreen from './src/components/FlatListScreen';
// import Styling from './src/components/Styling';
// import InputText from './src/components/InputText';
// import Props from './src/components/Props';
// import UseStateHook from './src/components/UseStateHook';
// import OnPress from './src/components/OnPress';
// import First from './src/components/First';
// import JSX from './src/components/JSX';
// const App = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       {/* <Text style={ { fontSize : 30 } }>React Native Mobile APP Developer</Text>
//       <Text style={ { fontSize : 30 } }>Farzeen Ali</Text>
//       <Button title="Press Here" />
//       <First />
//       <First />
//       <First />
//       <First /> */}
//       {/* <JSX /> */}
//       {/* <OnPress /> */}
//       {/* <UseStateHook /> */}
//       {/* <Props /> */}
//       {/* <InputText /> */}
//       {/* <Styling /> */}
//       {/* <FlatListScreen /> */}
//       {/* <SectionListScreen /> */}
//       {/* <LoginForm /> */}
//       {/* <ContactListScreen /> */}
//       {/* <Grid /> */}
//       {/* <ClassComponents /> */}
//       {/* <UseEffectHook /> */}
//       {/* <UseEffectHookUpdatingPhase /> */}
//       {/* <UseEffectHookUnmountingPhase /> */}
//       {/* <HideShowToggle /> */}
//       {/* <StyleWithButton /> */}
//       {/* <Loader /> */}
//       {/* <PressableComponent /> */}
//       {/* <StatusBarExample /> */}
//       {/* <UseRefHook /> */}
//       {/* <ModalDialogBox /> */}
//       {/* <AlertExample /> */}
//       {/* <GET_API /> */}
//       {/* <POST_API /> */}
//       {/* <PUT_API /> */}
//       {/* <PATCH_API /> */}
//       {/* <DELETE_API /> */}
//       {/* <GET_API_LIST /> */}
//       {/* <PlatformExample /> */}
//       {/* <Search /> */}
//       {/* <AsyncStorageExample /> */}
//       <ImageComponentExample />
//     </View>
//   );
// };


// const First = () => {
//   return (
//     <View>
//       <Text style={ { fontSize : 30 } }>React Native</Text>
//     </View>
//   );
// };


// export default App;



// ********* Context API *****************

// import { View } from 'react-native';
// import React from 'react';
// import Parent from './src/components/Parent';

// const App = () => {
//   return (
//     <View style={{flex: 1}}>
//       <Parent />
//     </View>
//   );
// };

// export default App;

// Redux Toolkit

// import React from 'react';
// import {Provider} from 'react-redux';
// import { store } from './src/redux/store/store';
// import Counter from './src/components/Counter';

// const App = () => {
//   return(
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   );
// };

// export default App;


// // zustand --> A State Management Library for React Apps
// import React from 'react';
// import { View } from 'react-native';
// import One from './src/components/One';

// const App = () => {
//   return (
//     <View style={{ flex: 1 }}>
//        <One />
//     </View>
//   );
// };

// export default App;



// Native Wind
// import React from 'react';
// import { SafeAreaView } from 'react-native';
// import MyLogin from './src/components/MyLogin';

// const App = () => {
//   return(
//     <SafeAreaView className="flex-1">
//       <MyLogin />
//     </SafeAreaView>
//   );
// };

// export default App;


// Reanimated React Native
// import React from 'react';
// import { View } from 'react-native';
// import AnimatedCardFlip from './src/components/AnimatedCardFlip';

// const App = () => {
//   return (
//     <View className="flex-1">
//       <AnimatedCardFlip />
//     </View>
//   );
// };

// export default App;

// Firebase

// import { View, Text } from 'react-native';
// import React from 'react';

// const App = () => {
//   return (
//     <View className="flex-1">
//       <Text className="text-center text-6xl">Firebase with React Native</Text>
//     </View>
//   );
// };

// export default App;


// Firebase Authentication
// import React from 'react';
// import Login from './src/components/Login';
// import Register from './src/components/Register';
// import ForgotPassword from './src/components/ForgotPassword';
// import  {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} options={{
//           headerShown: false,
//         }} />
//         <Stack.Screen name="Register" component={Register}  options={{
//           headerShown: false,
//         }} />
//         <Stack.Screen name="ForgotPassword" component={ForgotPassword}  options={{
//           headerShown: false,
//         }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


// Firebase Firestore Database

import { View } from 'react-native';
import React from 'react';
import UserCRUD from './src/components/UserCRUD';

const App = () => {
  return (
    <View className="flex-1">
      <UserCRUD />
    </View>
  );
};

export default App;
