// // RootNavigator.js
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import DrawerNavigator from './DrawerNavigation';
// import BottomNavBar from './BottomNavigation';
// import LoginScreen from '../Screens/LogInOut/LoginScreen';
// import SignUpScreen from '../Screens/LogInOut/SignUpScreen';

// const Stack = createNativeStackNavigator();

// const RootNavigator = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.content}>
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="Main" component={DrawerNavigator} />
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="SignUp" component={SignUpScreen} />
//         </Stack.Navigator>
//       </View>
//       <BottomNavBar />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   content: {
//     flex: 1,
//   },
// });

// export default RootNavigator;



// RootNavigator.js
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';


// import DrawerNavigator from './DrawerNavigation';
// import BottomNavBar from './BottomNavigation';
// import LoginScreen from '../Screens/LogInOut/LoginScreen';
// import SignUpScreen from '../Screens/LogInOut/SignUpScreen';

// import Obituary from '../Screens/Obituary/obituary';

// import HomeScreen from '../Screens/Home/Home';

// const Stack = createNativeStackNavigator();

// const RootNavigator = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//     <View style={styles.container}>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Main">
//           {() => (
//             <View style={styles.content}>
//               <DrawerNavigator />
//               <BottomNavBar />
//             </View>
//           )}
//         </Stack.Screen>
//         <Stack.Screen name="login" component={LoginScreen} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Obituary" component={Obituary} />
//         {/* <Stack.Screen name="Tour" component={TourScreen} /> */}
//       </Stack.Navigator>
//     </View>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   content: {
//     flex: 1,
//   },
// });

// export default RootNavigator;
