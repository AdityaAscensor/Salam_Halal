import React from 'react';
import DrawerNavigator from './src/Navigation/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';
import UserLayout from './src/Components/UserLayout.js';
import BottomNavBar from './src/Navigation/BottomNavigation';
import RootStack from './src/Navigation/RootStack';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//icons
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome5';


//screens 

import HomeScreen from './src/Screens/Home/Home';
import CategoryScreen from './src/Screens/Category/Category';
import Obituary from './src/Screens/Obituary/obituary';
import LoginScreen from './src/Screens/LogInOut/LoginScreen';



const IC_home = <Icon name="home" size={30} />
const IC_category = <Icon name="category" size={30} />
const IC_obituary = <FaIcon name="book-dead" size={30} />
const IC_login = <Icon name="login" size={30} />

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
    <DrawerNavigator/>
    {/* <UserLayout>
      
    <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:()=>IC_home,headerShown:false} } />
    <Tab.Screen name="Category" component={CategoryScreen} options={{tabBarIcon:()=>IC_category, headerShown:false}} />
    <Tab.Screen name="Obituary" component={Obituary} options={{tabBarIcon:()=>IC_obituary, headerShown:false}} />
    <Tab.Screen name="Login" component={LoginScreen} options={{tabBarIcon:()=>IC_login, headerShown:false}} />

    </UserLayout> */}
    </NavigationContainer>
  );
};

export default App;


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// //Screens
// import HomeScreen from './src/Screens/Home';
// import ListingDetails from './src/Screens/ListingDetails';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// //ICONS
// const IC_home = <Icon name="home" size={30} />
// const IC_category = <Icon name="category" size={30} />


// //making bottom navBar
// function TabNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen 
//         name="Home" 
//         component={HomeScreen} 
//         options={{tabBarIcon: () => IC_home, headerShown: false}}
//       /> /
//       <Tab.Screen 
//         name="Category" 
//         component={ListingDetails} 
//         options={{tabBarIcon: () => IC_category, headerShown: false}}
//       />
//     </Tab.Navigator>
//   );
// }


// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen 
//           name="Main" 
//           component={TabNavigator}
//           options={{
//             title: 'Lanka Shops',
//             headerStyle: {
//               backgroundColor: '#f4511e',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
