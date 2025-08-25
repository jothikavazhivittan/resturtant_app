import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { fs, hs, rs } from '../../../utils/responsive/Responsive'
import { colors, fonts } from '../../../utils/FontAndColors/FontsAndColors'
import Img from '../image/Img'
import { search } from '../../../assets/image'

const Input = ({placeholder,mt,value,onChangeText,keyboardType,bg,image}) => {
  return (

    <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingHorizontal:rs(15)}}>
    <View style={[styles.txtcontainer,{marginTop:rs(mt),backgroundColor:bg ? bg:'rgba(133, 132, 132, 0.73'}]}>
        <TextInput 
        style={styles.fonttxt}
        placeholder={placeholder}
        placeholderTextColor={'#333533'}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        />
       {image && ( <Img src={search} width={20} height={20}/>)}
        {/* <Img src={search} width={20} height={20}/> */}
    </View>
      {/* <Img src={search} width={20} height={20} color={'white'} ml={8}/> */}

    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  txtcontainer:{
    width:'100%',
    height:hs(50),
    backgroundColor:'rgba(133, 132, 132, 0.73)',
    borderRadius:rs(10),
   marginTop:rs(10),
   paddingHorizontal:rs(10),
   flexDirection:'row',
   alignItems:'center'
  },
  fonttxt:{
    fontFamily:fonts.regular,
    fontSize:fs(18),
    color:'#000',
    flex:1
  }
})