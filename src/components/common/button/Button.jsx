import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Word from '../word/Word'
import { hs, rs, ws } from '../../../utils/responsive/Responsive'

const Button = ({bg,onPress,title}) => {
  return (
    <View>
        <TouchableOpacity style={[styles.btn,{backgroundColor:bg? bg:'red'}]} onPress={onPress}>
            <Word text={title} font={7} size={22} color={'white'} tc={'center'}/>
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    btn:{
        width:'95%',
        height:hs(50),
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:rs(25),
        alignSelf:'center',
        borderRadius:rs(10),
        marginTop:rs(25)
    }
})