import { ImageBackground, SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../utils/FontAndColors/FontsAndColors'
import { fs, hs, rs } from '../../utils/responsive/Responsive'
import Word from '../../components/common/word/Word'
import { dinee_in } from '../../assets/image'
import Button from '../../components/common/button/Button'
import { useNavigation } from '@react-navigation/native'

const OpenTerminal = () => {
  const [cash, setCash] = useState('')
  const navigation=useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Word text={'Welcome Dinee'} font={10} size={30} color={colors.Primary} tc={'center'} mt={20}/>
        
        <View style={styles.imageContainer}>
          <ImageBackground
            source={dinee_in}
            style={styles.imageBackground}
            resizeMode="cover"
          >
            <Word text={'POS Testing'} font={5} size={20} color={colors.white} tc={'center'} mt={10}/>
            <Word text={'developer@infotech.com'} size={20} color={colors.white} tc={'center'} mt={10}/>
            <View style={styles.allign}>
              <Word text={'Current Time'} size={18} color={colors.white} mt={20} font={5}/>
              <Word text={'10:15 AM'} size={18} color={'#f4d35e'} mt={20} font={5}/>
            </View>
            <View style={styles.allign}>
              <Word text={'Date Today'} size={18} color={colors.white} mt={20} font={5}/>
              <Word text={'2025-07-18'} size={18} color={'#f4d35e'} mt={20} font={5}/>
            </View>
          </ImageBackground>
        </View>


        <View style={styles.txtContainer}>
          <Word text={'Enter Your Opening Cash'} size={16} font={5} color={colors.white}  tc={'center'} mb={15}/>

          <TextInput 
            value={cash} 
            onChangeText={(e) => setCash(e)} 
            style={styles.txt} 
            keyboardType='number-pad' 
            placeholder='0.00' 
            placeholderTextColor={'white'}
            textAlign="right" 
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button bg={colors.Primary} title={'Start Shift'} onPress={()=>navigation.navigate('checkout')}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default OpenTerminal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: rs(15)
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: hs(300), 
    borderRadius: rs(20),
    overflow: 'hidden',
    marginTop: rs(20)
  },
  imageBackground: {
    flex: 1,
    paddingHorizontal: rs(20) 
  },
  allign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: rs(20)
  },
  txt: {
    fontFamily: fonts.regular,
    fontSize: fs(20), 
    color: colors.white,
    flex: 1, 
    textAlign: 'right' 
  },
  txtContainer: {
    width: "100%",
    height: hs(50),
    backgroundColor: "rgba(27, 27, 27, 1)",
    borderRadius: rs(10),
    marginTop: rs(20),
    paddingHorizontal: rs(10), 
    flexDirection: 'row', 
    alignItems: 'flex-end' 
  },
  buttonContainer: {
    marginTop: rs(20),
    width: '100%',
    marginBottom: rs(20) 
  }
})