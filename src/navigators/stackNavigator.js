import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ALBUMS, DETAILS, HOME, LOGIN} from "./routes";
import HomeScreen from "../screens/homeScreen";
import NewsDetailsScreen from "../screens/newsDetailsScreen";
import LoginScreen from "../screens/authScreen/loginScreen";
import AlbumScreen from "../screens/albumScreen/albumScreen";


const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={LOGIN}
    >
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={HOME} component={HomeScreen} />
      <Stack.Screen name={DETAILS} component={NewsDetailsScreen} />
      <Stack.Screen name={ALBUMS} component={AlbumScreen} />
    </Stack.Navigator>
  );
}