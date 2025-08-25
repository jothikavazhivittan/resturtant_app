import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Input from '../../components/common/textinput/Input'
import Img from '../../components/common/image/Img'
import { drawer } from '../../assets/image'
import { useNavigation } from '@react-navigation/native'
import { hs, rs, ws } from '../../utils/responsive/Responsive'
import { colors } from '../../utils/FontAndColors/FontsAndColors'
import Word from '../../components/common/word/Word'

const HomeScreen = () => {
    const navigation=useNavigation()
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Word text={'Welcome...🙏'} size={18} font={5} color={colors.black} mt={20}/>
        <View style={styles.allign}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Img src={drawer} width={30} height={30} color={colors.Primary}/>
            </TouchableOpacity>
            <Input bg={'rgba(151, 66, 62, 0.3)'} placeholder={'Search...'} image={true}/>

        </View>
        <View>
            <Word text={'Menus...'} size={20} font={6} color={colors.black} mt={15}/>
            <TouchableOpacity style={styles.boxContainer}>
                <Word text={'Dosa'} size={18} font={6} color={colors.black} mt={10} tc={'center'}/>
                <Word text={'INP 60'} size={16} font={6} color={colors.Primary} mt={10} tc={'center'}/>
            </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        paddingHorizontal:rs(20),
    },
    allign:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:rs(25),
        justifyContent:'center',
        marginLeft:rs(10)
    },
    boxContainer:{
       width:ws(180),
       paddingVertical:rs(10),
        backgroundColor:colors.white,
        elevation:5,
        shadowOffset:{width:2,height:0},
        shadowColor:'#000',
        shadowOpacity:0.25,
        marginTop:rs(25),
       borderTopLeftRadius:rs(15),
       borderBottomRightRadius:rs(15)
    }
})