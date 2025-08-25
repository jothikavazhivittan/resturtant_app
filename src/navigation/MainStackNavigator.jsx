import { StyleSheet } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import LoginType from '../screens/auth/LoginType';
import AppDrawer from './AppDrawer'; // We'll create this
import OpenTerminal from '../screens/feed/OpenTerminal';
import CheckoutScreen from '../screens/feed/CheckoutScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='login_type' screenOptions={{headerShown: false}}>
      <Stack.Screen name='login' component={LoginScreen}/>
      <Stack.Screen name='home' component={AppDrawer}/>
      <Stack.Screen name='login_type' component={LoginType}/>
      <Stack.Screen name='open-terminal' component={OpenTerminal}/>
      <Stack.Screen name='checkout' component={CheckoutScreen}/>
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({});