import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurvedBottomBar from './CurvedBottomBar';
import HomeScreen from '../screens/feed/HomeScreen';
import OrderListScreen from '../screens/feed/OrderListScreen';
import CartScreen from '../screens/feed/CartScreen';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CurvedBottomBar {...props} />}
      screenOptions={{ 
        headerShown: false,
      }}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="OrderList" component={OrderListScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default AppTabs;