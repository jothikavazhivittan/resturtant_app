import { Dimensions, Image, SafeAreaView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Template from '../../components/common/Template'
import Img from '../../components/common/image/Img'
import { background, light } from '../../assets/image'
import Word from '../../components/common/word/Word'
import Input from '../../components/common/textinput/Input'
import { hs, rs, ws } from '../../utils/responsive/Responsive'
import Button from '../../components/common/button/Button'
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../utils/FontAndColors/FontsAndColors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useLoginMutation } from '../../redux/apiRequest/api'
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const LoginScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [outlet, setOutlet] = useState('')
    const [login]=useLoginMutation()
    const handledClick = () => {
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(trimmedEmail) || trimmedEmail.endsWith('.in');

        if (!trimmedEmail) {
            ToastAndroid.show('Enter your email', ToastAndroid.SHORT);
            return;
        }

        if (!isEmailValid) {
            ToastAndroid.show('Enter a valid email ending with .in domain', ToastAndroid.SHORT);
            return;
        }

        if (!trimmedPassword) {
            ToastAndroid.show('Enter your password', ToastAndroid.SHORT);
            return;
        }

        if (trimmedPassword.length < 6) {
            ToastAndroid.show('Password must be at least 6 characters', ToastAndroid.SHORT);
            return;
        }
        if (!outlet) {
            ToastAndroid.show('Enter your outlet code', ToastAndroid.SHORT)
            return
        }
        navigation.navigate('home')
    };
const API_URL = 'http://apiactivation.armadapos.org/Api/Mobile/HandShake?API_KEY=10119';
const fetchHandShake = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log('Handshake response:', data);
      AsyncStorage.setItem('main_data',data?.URL)
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
   useEffect(() => {
    fetchHandShake();
  }, []);
  useEffect(() => {
        AsyncStorage.getItem('login_type').then(res => {
            console.log(res, 'login type');

        }).catch(err => {
            console.log(err, 'error');

        })
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={{ position: 'absolute', top: -55, left: 0, width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}>
                    <Img src={background} width={100} height={100} per={'%'} rm={'cover'} color={colors.Primary} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} source={light} style={{ width: ws(90), height: hs(220) }} resizeMode='contain' />
                    <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} source={light} style={{ width: ws(60), height: hs(115) }} resizeMode='contain' />
                </View>
            </View>
            <View>
                <Animated.View entering={FadeInUp.delay(200).duration(1000).springify()}>
                    <Word text={'Login'} font={7} color={'#ffffff'} size={40} tc={'center'} mt={20} />
                </Animated.View>
                <View style={{ marginTop: '30%' }}>
                    <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()}>
                        <Input placeholder={'Email'} value={email} onChangeText={(e) => setEmail(e)} />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()}>

                        <Input placeholder={'Password'} mt={25} value={password} onChangeText={(e) => setPassword(e)} />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()}>
                        <Input placeholder={'Outlet'} value={outlet} onChangeText={(e) => setOutlet(e)} mt={25} keyboardType={'number-pad'} />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(1000).duration(1000).springify()}>

                        <Button bg={'#8d0801'} title={'Login'} onPress={() => handledClick()} />
                    </Animated.View>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    allign: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: rs(20)
    }
})