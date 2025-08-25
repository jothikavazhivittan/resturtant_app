import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Word from '../../components/common/word/Word'
import { colors } from '../../utils/FontAndColors/FontsAndColors'
import { rs } from '../../utils/responsive/Responsive'
import Img from '../../components/common/image/Img'
import { back, drawer, minusItem, more, plusItem } from '../../assets/image'
import { useNavigation } from '@react-navigation/native'
import OrderCommentModal from '../../components/feed/modal/OrderCommentModal'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../auth/LoginScreen'
import Button from '../../components/common/button/Button'

const CartScreen = () => {
  const navigation = useNavigation()
  const [plus, setPlus] = useState(0)
  const [minus, setMinus] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const[showVisible,setShowVisible]=useState(false)
  const addCount = () => {
    setPlus(plus + 1)
    setQuantity(plus + 1)
  }
  const removeCount = () => {
    if (plus > 0) {
      setMinus(minus + 1)
      setQuantity(plus - minus - 1)
    }
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View>
            <View style={styles.allign}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Img src={back} width={20} height={20} mt={15} />
              </TouchableOpacity>
              <Word text={'Cart'} font={6} size={20} color={colors.black} mt={15} />
            </View>
            <View style={styles.allignItems}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Img src={drawer} width={25} height={25} />
              </TouchableOpacity>
              <View>
                <Word text={'Order #'} font={5} size={16} color={colors.black} tc={'center'} />
                <Word text={23} font={5} size={16} color={colors.black} mt={5} tc={'center'} />
              </View>
              <View>
                <Word text={'Table'} size={16} color={colors.black} font={5} tc={'center'} />
                <Word text={'3'} size={16} color={colors.black} font={5} mt={5} tc={'center'} />
              </View>
              <View>
                <Word text={'Total'} size={16} color={colors.black} font={5} tc={'center'} />
                <Word text={'48.30'} size={16} color={colors.black} font={5} mt={5} tc={'center'} />
              </View>
            </View>
            <View style={styles.allignItems}>
              <TouchableOpacity style={styles.box}>
                <Word text={'Empty Cart'} font={5} size={16} color={colors.white} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.box} onPress={()=>setShowVisible(true)}>
                <Word text={'Add Comment'} font={5} size={16} color={colors.white} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <Word text={'Place Order'} font={5} size={16} color={colors.white} />
              </TouchableOpacity>
            </View>
            <View style={styles.boxContainer}>
              <View style={styles.allignContainer}>
                <Word text={'Biryani'} color={colors.white} size={16} font={6} />
                <TouchableOpacity>
                  <Img src={more} width={25} height={25} color={colors.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={removeCount}>
                  <Img src={minusItem} width={25} height={25} color={colors.white} />
                </TouchableOpacity>
                <Word text={quantity} font={5} size={16} color={colors.white} />
                <TouchableOpacity onPress={addCount}>
                  <Img src={plusItem} width={25} height={25} color={colors.white} />
                </TouchableOpacity>
                <Word text={'20.90'} size={16} font={5} color={colors.white} />
              </View>
            </View>
          </View>
          
          <View style={styles.checkoutButton}>
            <Button title={'CheckOut'} bg={colors.Primary} onPress={()=>navigation.navigate('open-terminal')}/>
          </View>
        </View>
      </SafeAreaView>
      {showVisible && ( <OrderCommentModal onClose={()=>setShowVisible(false)}/>)}
    </>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: rs(20),
    justifyContent: 'space-between'
  },
  allign: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: rs(10)
  },
  allignItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: rs(20)
  },
  box: {
    paddingHorizontal: rs(10),
    paddingVertical: rs(15),
    backgroundColor: colors.Primary,
    borderTopLeftRadius: rs(10),
    borderBottomRightRadius: rs(10)
  },
  boxContainer: {
    paddingVertical: rs(20),
    width: '100%',
    backgroundColor: colors.Primary,
    marginTop: rs(10),
    borderRadius: rs(10),
    padding: rs(10)
  },
  allignContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkoutButton: {
    marginBottom: rs(120),
    alignSelf: 'flex-end',
    width: '80%',
    marginRight:rs(30)
  }
})