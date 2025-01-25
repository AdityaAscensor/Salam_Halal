import React, { useState } from 'react';

import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';
import { categories } from '../../Data/category/data';

import {iconScreens} from '../../Components/routeForwarding'


const CategoryScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      // onPress={() => navigation.navigate(iconScreens[item.route])}
      onPress={()=>{
        const routeName = categories.find((category)=> category.name === item.name);
        navigation.navigate(routeName.route);
      }}
    >
      <Text style={styles.icon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in a grid with 2 columns
        renderItem={renderCategoryItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  list: {
    justifyContent: 'center',
  },
  categoryItem: {
    flex: 1,
    margin: 10,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    elevation: 2, // For shadow effect
  },
  icon: {
    fontSize: 30,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CategoryScreen;
