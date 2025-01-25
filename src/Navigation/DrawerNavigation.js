// import React from 'react';
// import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
// } from '@react-navigation/drawer';

// import BottomNavBar from '../Navigation/BottomNavigation';
// import ParkScreen from '../Screens/Park/ParkScreen';
// import TourScreen from '../Screens/TourScreen';
// import LoginScreen from '../Screens/LogInOut/LoginScreen';
// import SignUpScreen from '../Screens/LogInOut/SignUpScreen';
// import HomeScreen from '../Screens/Home/Home';

// const Drawer = createDrawerNavigator();

// // Custom Drawer Content
// const CustomDrawerContent = props => {
//   return (
//     <View style={{flex: 1}}>
//       {/* Default Drawer Items */}
//       <DrawerContentScrollView {...props}>
//         <DrawerItemList {...props} />
//       </DrawerContentScrollView>

//       {/* Login and Signup Buttons */}
//       <View style={styles.bottomButtonsContainer}>
//         <TouchableOpacity
//           style={[styles.button, {marginRight: 10}]}
//           onPress={() => props.navigation.navigate('login')}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => props.navigation.navigate('SignUp')}>
//           <Text style={styles.buttonText}>Signup</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// // Drawer Navigator
// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawerContent {...props} />}
//       screenOptions={{
//         headerTitle: () => (
//           <View style={{borderWidth: 1, borderColor: 'green', width: 130}}>
//             <Text
//               style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
//               <Text style={{color: 'green'}}>Salam</Text>
//               <Text style={{color: 'black', paddingLeft: 10}}> Halal</Text>
//             </Text>
//           </View>
//         ),

//         headerTitleStyle: 'center',
//         headerRight: () => (
//           <Image // text should be in middle Lanka Shops(css must be same) and logo should be on right
//             source={require('../Assets/logo/logo.jpg')}
//             style={{
//               width: 40,
//               height: 40,
//               resizeMode: 'contain',
//               marginRight: 10,
//             }}
//           />
//         ),
//         headerTitleAlign: 'center',
//       }}>
//       <Drawer.Screen
//         name="Home"
//         // component={BottomNavBar}
//         component={HomeScreen}
//         options={{
//           title: 'Home',
//         }}
//       />
//       <Drawer.Screen
//         name="ParkScreen"
//         component={ParkScreen}
//         options={{
//           drawerItemStyle: {display: 'none'}, // Hide from Drawer Menu
//         }}
//       />
//       <Drawer.Screen
//         name="Tour"
//         component={TourScreen}
//         options={{
//           drawerItemStyle: {display: 'none'}, // Hide from Drawer Menu
//         }}
//       />
//       <Drawer.Screen
//         name="Login"
//         component={LoginScreen}
//         options={{
//           drawerItemStyle: {display: 'none'}, // Hide from Drawer Menu
//         }}
//       />

//       <Drawer.Screen
//         name="SignUp"
//         component={SignUpScreen}
//         options={{
//           drawerItemStyle: {display: 'none'}, // Hide from Drawer Menu
//         }}
//       />

      
//       <Drawer.Screen
//         name="Main"
//         component={BottomNavBar}
//         options={{
//           headerShown: false
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   bottomButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 20,
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//     backgroundColor: '#fff',
//   },
//   button: {
//     flex: 1,
//     backgroundColor: '#007BFF',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default DrawerNavigator;

// // DrawerNavigation.js
// // import React from 'react';
// // import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// // import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// // import HomeScreen from '../Screens/Home/Home';
// // import ParkScreen from '../Screens/Park/ParkScreen';
// // import TourScreen from '../Screens/TourScreen';

// // const Drawer = createDrawerNavigator();

// // // Custom Drawer Content
// // const CustomDrawerContent = (props) => {
// //   return (
// //     <View style={{ flex: 1 }}>
// //       <DrawerContentScrollView {...props}>
// //         <DrawerItemList {...props} />
// //       </DrawerContentScrollView>
// //       <View style={styles.bottomButtonsContainer}>
// //         <TouchableOpacity style={[styles.button, { marginRight: 10 }]} onPress={() => props.navigation.navigate('Login')}>
// //           <Text style={styles.buttonText}>Login</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('SignUp')}>
// //           <Text style={styles.buttonText}>Signup</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // // Drawer Navigator
// // const DrawerNavigator = () => {
// //   return (
// //     <Drawer.Navigator
// //       drawerContent={(props) => <CustomDrawerContent {...props} />}
// //       screenOptions={{
// //         headerTitle: () => (
// //           <View style={{borderWidth:1,borderColor:'green', width:130}}>
// //             <Text style={{fontSize:20,fontWeight:'bold', textAlign:'center'}}>
// //               <Text style={{color:'green'}}>Salam</Text>
// //               <Text style={{color:'black', paddingLeft:10}}>{" "}Halal</Text>
// //             </Text>
// //           </View>
// //         ),
// //         headerTitleStyle: 'center',
// //         headerRight: () => (
// //           <Image
// //             source={require('../Assets/logo/logo.jpg')}
// //             style={{ width: 40, height: 40, resizeMode: 'contain', marginRight: 10}}
// //           />
// //         ),
// //         headerTitleAlign: 'center',
// //       }}
// //     >
// //       <Drawer.Screen name="Home" component={HomeScreen} />
// //       <Drawer.Screen name="ParkScreen" component={ParkScreen} />
// //       <Drawer.Screen name="Tour" component={TourScreen} />
// //     </Drawer.Navigator>
// //   );
// // };

// // // Styles
// // const styles = StyleSheet.create({
// //   bottomButtonsContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     padding: 20,
// //     borderTopWidth: 1,
// //     borderTopColor: '#ccc',
// //     backgroundColor: '#fff',
// //   },
// //   button: {
// //     flex: 1,
// //     backgroundColor: '#007BFF',
// //     padding: 15,
// //     borderRadius: 10,
// //     alignItems: 'center',
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// // });

// // export default DrawerNavigator;



import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomNavigation';
import CustomSidebar from './CustomSidebar'; // Optional: Custom drawer content

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebar {...props} />} // Optional: Add custom sidebar
    >
      <Drawer.Screen
        name="Main"
        component={BottomTabs}
        options={{ headerShown: false }} // Hide header for bottom tabs
      />
    </Drawer.Navigator>
  );
}