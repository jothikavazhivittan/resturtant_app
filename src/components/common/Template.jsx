import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/FontAndColors/FontsAndColors'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/responsive/Responsive'

const Template = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
    </SafeAreaView>
  )
}

export default Template

const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.white,
       width:'100%',
       height:'100%',
       flex:1
    }
})