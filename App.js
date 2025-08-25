import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import store from './src/redux/store/store'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigator from './src/navigation/MainStackNavigator'
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <MainStackNavigator/>
        </NavigationContainer>
      </Provider>
      </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})