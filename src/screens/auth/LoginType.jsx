import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Word from '../../components/common/word/Word'
import Img from '../../components/common/image/Img'
import { phone, web } from '../../assets/image'
import { hs, rs, ws } from '../../utils/responsive/Responsive'
import { colors } from '../../utils/FontAndColors/FontsAndColors'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginType = () => {
  const navigation=useNavigation()
  const handledClick=(item)=>{
console.log(item,'click the option web or mobile');
AsyncStorage.setItem('login_type',item)
    navigation.navigate('login')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View entering={FadeInUp.delay(200).damping(30).duration(1000)}>
        <Word text={'Choice Your Type'} size={24} font={6} color={'black'} tc={'center'}/>
        </Animated.View >
        <Animated.View style={styles.allign} entering={FadeInDown.delay(600).duration(1000)}>
        <TouchableOpacity style={styles.circle} onPress={()=>handledClick('mobile')}>
        <Img src={phone} width={30} height={30} color={'#ffffff'}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={()=>handledClick('web')}>
        <Img src={web} width={30} height={30} color={'#ffffff'}/>
        </TouchableOpacity>
        </Animated.View>
    </SafeAreaView>
  )
}

export default LoginType

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        justifyContent:'center'
    },
    circle:{
      width:ws(80),
      height:hs(80),
      backgroundColor:colors.Primary,
      borderRadius:rs(80),
      justifyContent:'center',
      alignItems:'center'
    },
    allign:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
      marginTop:rs(30)
    }
})