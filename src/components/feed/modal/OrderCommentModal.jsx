import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Word from '../../common/word/Word';
import Input from '../../common/textinput/Input';
import Animated, { FadeInUp, SlideInUp } from 'react-native-reanimated';
import { colors } from '../../../utils/FontAndColors/FontsAndColors';
import { rs } from '../../../utils/responsive/Responsive';

const OrderCommentModal = ({ onClose }) => {
  return (
    <View style={styles.overlay}>
      <Animated.View style={styles.modalBox} entering={SlideInUp.springify().damping(10).mass(0.8).delay(100)}
>
        <Word text={'Order Comment'} font={5} color={colors.black} size={14}/>
        <Input placeholder={'Enter your comment'} mt={10}/>
        <Word text={'Covers'} font={5} color={colors.black} size={14}/>
        <Input placeholder={'Covers'} mt={10}/>
        <View style={{flexDirection:'row',alignItems:'center',gap:rs(20),justifyContent:'center'}}>
        <TouchableOpacity style={[styles.closeButton,{backgroundColor:colors.Primary}]} onPress={onClose}>
          <Word text="Submit" size={16} color="#fff" font={5}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Word text="Close" size={16} color="#fff" font={5}/>
        </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default OrderCommentModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    width:'100%',
    height:'100%'
  },
  modalBox: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: rs(20),
    // alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  closeButton: {
    marginTop: rs(20),
    backgroundColor: '#222',
    paddingVertical: rs(10),
    paddingHorizontal: rs(20),
    borderRadius: 8,
  },
});
