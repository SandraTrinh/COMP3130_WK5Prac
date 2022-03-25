import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'; //creating a stack navigation

import OtherScreen from '../screens/OtherScreen';
import FirstScreen from '../screens/FirstScreen';  //importing the screens


const Stack = createStackNavigator(); //define your Stack

function AppNavigator(props){
    return(
        <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{headerShown: false}}>
            <Stack.Screen name="FirstPage" component={FirstScreen}/>
            <Stack.Screen name="SecondPage" component={OtherScreen}/>
        </Stack.Navigator>
    )
}

export default AppNavigator;