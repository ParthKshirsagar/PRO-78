import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import DailyPic from "./screens/DailyPic";
import StarMap from "./screens/StarMap";
import SpaceCrafts from "./screens/SpaceCraft";

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="StarMap" component={StarMap} />
          <Stack.Screen name="DailyPic" component={DailyPic} />
          <Stack.Screen name="SpaceCrafts" component={SpaceCrafts} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}