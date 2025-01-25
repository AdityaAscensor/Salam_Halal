import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { createDrawerNavigator,  DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNavigator from "../Navigation/DrawerNavigation";

// import { StyleSheet, Text, View } from "react-native";
// import DrawerNavigator from "../Navigation/DrawerNavigation";
// import BottomNavBar from "../Navigation/BottomNavigation";


//screens

import ParkScreen from '../Screens/Park/ParkScreen';
import TourScreen from '../Screens/TourScreen';
import LoginScreen from '../Screens/LogInOut/LoginScreen';
import SignUpScreen from '../Screens/LogInOut/SignUpScreen';
import HomeScreen from '../Screens/Home/Home';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



const CustomDrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Default Drawer Items */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Login and Signup Buttons */}
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={[styles.button, { marginRight: 10 }]} onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function TabNavigator({children}){
  return(
    <Tab.Navigator>
      {children}
    </Tab.Navigator>
  )
}


export default function UserLayout({children}){
    return(
        <Drawer.Navigator
              drawerContent={(props) => <CustomDrawerContent {...props} />}
              screenOptions={{
                headerTitle:()=>( 
                <View style={{borderWidth:1,borderColor:'green', width:130}}>
                <Text style={{fontSize:20,fontWeight:'bold', textAlign:'center', }}>
                  <Text style={{color:'green'}}>Salam</Text> 
                  <Text style={{color:'black', paddingLeft:10}}>{" "}Halal</Text>  
                  </Text>
                  </View> 
                  ),
        
                headerTitleStyle:'center',
                headerRight: () => (
                  <Image  // text should be in middle Lanka Shops(css must be same) and logo should be on right 
                    source={require('../Assets/logo/logo.jpg')}
                    style={{ width: 40, height: 40, resizeMode: 'contain', marginRight: 10}}
                  />
                ),
                headerTitleAlign: 'center',
              }}
             >
            <Drawer.Screen name="Main">
                {() => <TabNavigator>{children}</TabNavigator>}
            </Drawer.Screen>

            <Drawer.Screen
        name="Home"
        // component={BottomNavBar}
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="ParkScreen"
        component={ParkScreen}
        options={{
          drawerItemStyle: { display: 'none' }, // Hide from Drawer Menu
        }}
      />
      <Drawer.Screen
        name="Tour"
        component={TourScreen}
        options={{
          drawerItemStyle: { display: 'none' }, // Hide from Drawer Menu
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{
          drawerItemStyle: { display: 'none' }, // Hide from Drawer Menu
        }}
      />

      <Drawer.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          drawerItemStyle: { display: 'none' }, // Hide from Drawer Menu
        }}
      />
        </Drawer.Navigator>
    );
}


const styles = StyleSheet.create({
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});