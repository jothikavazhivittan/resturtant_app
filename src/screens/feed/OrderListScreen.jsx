import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/FontAndColors/FontsAndColors'
import Word from '../../components/common/word/Word'
import { rs } from '../../utils/responsive/Responsive'
import { useNavigation } from '@react-navigation/native'
import { back, more } from '../../assets/image'
import Img from '../../components/common/image/Img'

const OrderListScreen = () => {
  const navigation=useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View>
 <View style={styles.allign}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Img src={back} width={20} height={20} mt={15} />
          </TouchableOpacity>
          <Word text={'Orders List'} font={6} size={20} color={colors.black} mt={15} />
        </View>   
        <View style={styles.allignItems}>
         <TouchableOpacity style={styles.btn}>
          <Word text={'My Orders'} font={6} color={colors.white} size={16}/>
         </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
          <Word text={'All Orders'} font={6} color={colors.white} size={16}/>
         </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.box}>
          <View style={[styles.allign,{justifyContent:'space-between',marginTop:rs(4)}]}> 
          
          <Word text={`Take Away ${2}`} font={5} size={16} color={colors.black}/>
          <TouchableOpacity>
            <Img src={more} width={20} height={20}/>
          </TouchableOpacity>
          </View>
          <Word text={`DateAndTime: ${'08-Jul-2025 12:05'}`} size={16} font={5} color={colors.black} mt={4}/>
          <Word text={`Kot #: ${'8'}`} size={16} font={5} color={colors.black} mt={4}/>
          <Word text={`Total: ${'80.00'}`} size={16} font={5} color={colors.black} mt={4}/>

        </TouchableOpacity> 
        </View>
         </SafeAreaView>
  )
}

export default OrderListScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white,
    paddingHorizontal:rs(15)
  },
   allign: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: rs(10)
  },
  btn:{
    paddingVertical:rs(10),
    paddingHorizontal:rs(15),
    backgroundColor:colors.Primary,
  },
  allignItems:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:rs(20),
    gap:rs(10)
  },
  box:{
    paddingVertical:rs(10),
    paddingHorizontal:rs(10),
    backgroundColor:'rgba(151, 66, 62, 0.3)',
    marginTop:rs(10),
    borderRadius:rs(10),
    shadowOffset:{width:2,height:0},
    shadowColor:colors.gray,
    elevation:8,
    }
})