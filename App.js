/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput
} from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "./src/navigators/stackNavigator";
import {navigationRef} from "./src/util/RootNavigator";
import TopBar from './src/components/topBar';





const App: () => Node = () => {
 
  return (
    <>
      <TopBar title="Main"/>
      <SafeAreaView
      style={{flex:1}}
      >
          <NavigationContainer ref={navigationRef}>
            <StackNavigator/>
          </NavigationContainer>
      </SafeAreaView>
    </>
    // <>
    
    // <ScrollView>
    //   <Text>Some text</Text>
    //   <View>
    //     <Text>Some more text</Text>
    //     <Image
    //       source={{
    //         uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
    //       }}
    //       style={{ width: 200, height: 200 }}
    //     />
    //   </View>
    //   <TextInput
    //     style={{
    //       height: 40,
    //       borderColor: 'gray',
    //       borderWidth: 1
    //     }}
    //     defaultValue="You can type in me"
    //   />
    // </ScrollView>

    // </>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
