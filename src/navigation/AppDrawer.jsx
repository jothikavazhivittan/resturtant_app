import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import AppTabs from './AppTabs'; // Your existing tab navigator
import SettingsScreen from '../screens/feed/SettingsScreen';
import RefundScreen from '../screens/feed/RefundScreen';
import LogoutScrren from '../screens/feed/LogoutScrren';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerType: 'front',
      }}
    >
      <Drawer.Screen name="Main" component={AppTabs} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Refund" component={RefundScreen} />
      <Drawer.Screen name="Logout" component={LogoutScrren} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;