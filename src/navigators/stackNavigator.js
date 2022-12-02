import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HOME} from "./routes";
import HomeScreen from "../screens/homeScreen";


const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={HOME}
    >
      <Stack.Screen name={HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}