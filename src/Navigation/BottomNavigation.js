  // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  // import Icon from 'react-native-vector-icons/MaterialIcons';
  // import FaIcon from 'react-native-vector-icons/FontAwesome5';

  // import React from 'react';

  // //Screens
  // import HomeScreen from '../Screens/Home/Home';
  // import CategoryScreen from '../Screens/Category/Category';
  // import Obituary from '../Screens/Obituary/obituary';
  // import LoginScreen from '../Screens/LogInOut/LoginScreen';




  // const Tab = createBottomTabNavigator();

  // //ICONS
  // const IC_home = <Icon name="home" size={30} />
  // const IC_category = <Icon name="category" size={30} />
  // const IC_obituary = <FaIcon name="book-dead" size={30} />
  // const IC_login = <Icon name="login" size={30} />




  // const BottomNavBar = ()=>{
  //     return(
          
  //         <Tab.Navigator>
  //         <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:()=>IC_home,headerShown:false} } />
  //         <Tab.Screen name="Category" component={CategoryScreen} options={{tabBarIcon:()=>IC_category, headerShown:false}} />
  //         <Tab.Screen name="Obituary" component={Obituary} options={{tabBarIcon:()=>IC_obituary, headerShown:false}} />
  //         <Tab.Screen name="Login" component={LoginScreen} options={{tabBarIcon:()=>IC_login, headerShown:false}} />

  //     </Tab.Navigator>
  //     )
  // }


  //   export default BottomNavBar;


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './screens/HomeScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import SettingsScreen from './screens/SettingsScreen';


  import HomeScreen from '../Screens/Home/Home';
  import ProfileScreen from '../Screens/Category/Category';
  import SettingsScreen from '../Screens/Obituary/obituary';
  
  import LoginScreen from '../Screens/LogInOut/LoginScreen';
  
import SignUpScreen from '../Screens/LogInOut/SignUpScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hide the header
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
      {/* <Tab.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false, tabBarStyle: { display: 'none' }}}/> */}
      
    </Tab.Navigator>
  );
}