import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { cashback, list, logout, menu, settings, time, user } from '../assets/image';
import Img from '../components/common/image/Img';
import Word from '../components/common/word/Word';
import { colors, fonts } from '../utils/FontAndColors/FontsAndColors';
import { fs, rs } from '../utils/responsive/Responsive';

const CustomDrawer = (props) => {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.header}>
                    <Img src={user} width={50} height={50} color={colors.white} />
                    <Word text={'POS Testing'} size={20} font={4} color={colors.white} mt={10} />
                </View>

                <View style={styles.menuSection}>
                    <DrawerItem
                        label="Menu"
                        onPress={() => props.navigation.navigate('Menu')}
                        labelStyle={styles.menuItemText}
                        icon={() => <Img src={menu} width={25} height={25} />}
                    />
                    <DrawerItem
                        label="Settings"
                        onPress={() => props.navigation.navigate('Settings')}
                        labelStyle={styles.menuItemText}
                        icon={() => <Img src={settings} width={25} height={25} />}
                    />
                    <DrawerItem
                        label="Refund"
                        onPress={() => props.navigation.navigate('Refund')}
                        labelStyle={styles.menuItemText}
                        icon={() => <Img src={cashback} width={25} height={25} />}
                    />
                    <DrawerItem
                        label="Logout"
                        onPress={() => props.navigation.navigate('Logout')}
                        labelStyle={styles.menuItemText}
                        icon={() => <Img src={logout} width={25} height={25} />}
                    />
                </View>

                <TouchableOpacity style={styles.timerSection}>
                    <View style={styles.allign}>
                        <Img src={time} width={25} height={25} mt={10}/>
                        <Word text={'Open Shift'} font={4} size={18} color={colors.Primary} mt={10}/>
                    </View>
                    <Word text={'00 Hours:00 Minutes:00 Seconds'} font={4} color={colors.black} size={14}  mt={10}/>
                </TouchableOpacity>

                {/* <View style={styles.footer}>
          <Text style={styles.versionText}>App Version 2.0.7</Text>
          <Text style={styles.copyrightText}>© 2025 Dinee (Global) Ltd. All Rights Reserved</Text>
        </View> */}
            </DrawerContentScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        borderBottomColor: '#eee',
        alignItems: 'center',
        backgroundColor: colors.Primary,
    },
   menuSection: {
        marginTop: rs(20),
    },
    allign: {
        flexDirection: 'row',
        gap: 10
    },
    timerSection: {
        backgroundColor: colors.sandle,
        marginTop:rs(40),
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:rs(10)
    },
   menuItemText:{
    fontFamily:fonts.regular,
    fontSize:rs(14),
    color:colors.black
   }
});

export default CustomDrawer;