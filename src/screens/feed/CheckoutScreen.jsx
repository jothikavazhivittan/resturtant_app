import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/FontAndColors/FontsAndColors'
import { rs } from '../../utils/responsive/Responsive'
import Img from '../../components/common/image/Img'
import { back, card, cash, upi } from '../../assets/image'
import Word from '../../components/common/word/Word'
import { useNavigation } from '@react-navigation/native'

const CheckoutScreen = () => {
    const navigation = useNavigation()
    const data = [
        { id: 1, name: 'Sub Total', order: 'INR', amount: '46.00', color: '#8d0801' },
        { id: 2, name: 'Discount', order: 'INR', amount: '0.00' },
        { id: 3, name: 'Net Total', order: 'INR', amount: '46.00' },
        { id: 4, name: 'Tax', order: 'INR', amount: '0.00' },
        { id: 5, name: 'Gross Total', order: 'INR', amount: '46.00', color: '#8d0801' },
        { id: 6, name: 'Cash', order: 'INR', amount: '0' },
        { id: 7, name: 'Other Source', order: 'INR', amount: '0.00' },
        { id: 8, name: 'Tip', order: 'INR', amount: '0.00' },
        { id: 8, name: 'Change', order: 'INR', amount: '46.00-' },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.allign}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Img src={back} width={20} height={20} mt={15} />
                    </TouchableOpacity>
                    <Word text={'Check Out'} font={6} size={20} color={colors.black} mt={15} />
                </View>
                <View style={[styles.allign, { justifyContent: 'center', marginTop: rs(20), gap: rs(20) }]}>
                    <TouchableOpacity style={styles.btn}>
                        <Word text={'Apply Discount'} size={18} color={colors.white} font={5} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Word text={'Print Preview'} size={18} color={colors.white} font={5} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.allignItems]}>
                    <View>
                        <Word text={'Customer Name'} font={5} size={16} color={colors.black} />
                        <Word text={'Search...'} color={colors.Primary} size={16} font={5} mt={10} />
                    </View>
                    <View>
                        <Word text={'Order #'} font={5} size={16} color={colors.black} />
                        <Word text={'56'} color={colors.Primary} size={16} font={8} mt={10} />
                    </View>
                    <View>
                        <Word text={'Table#'} font={5} size={16} color={colors.black} />
                        <Word text={'4'} color={colors.Primary} size={16} font={8} mt={10} />
                    </View>
                </View>
                <View style={styles.dataContent}>
                    {data?.map((item, id) => {
                        return (
                            <View key={id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Word text={item?.name} size={16} color={item?.color} font={6} mt={10} />
                                <Word text={item?.order} size={16} color={colors.black} font={6} mt={10} />
                                <Word text={item?.amount} size={16} color={colors.Primary} font={6} mt={10} />
                            </View>
                        )
                    })}
                </View>
                <Word text={`Total:INR ${4689}`} size={22} font={6} color={colors.Primary} tc={'right'} mt={20} p={10} />
                <View style={[styles.allign, { justifyContent: 'center', marginTop: rs(20), gap: rs(25) }]}>
                    <TouchableOpacity style={[styles.btn, { flexDirection: 'row', alignItems: 'center', gap: rs(5) }]}>
                        <Img src={cash} width={20} height={20} color={colors.white} />
                        <Word text={'Cash'} size={18} color={colors.white} font={5} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { flexDirection: 'row', alignItems: 'center', gap: rs(5) }]}>
                        <Img src={card} width={20} height={20} color={colors.white} />
                        <Word text={'Card'} size={18} color={colors.white} font={5} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { flexDirection: 'row', alignItems: 'center', gap: rs(5) }]}>
                        <Img src={upi} width={20} height={20} color={colors.white} />
                        <Word text={'UPI'} size={18} color={colors.white} font={5} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: rs(15)
    },
    allign: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: rs(10)
    },
    btn: {
        paddingVertical: rs(15),
        paddingHorizontal: rs(10),
        backgroundColor: colors.Primary,
        borderRadius: rs(10)
    },
    allignItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: rs(20),
        backgroundColor: 'rgba(187, 110, 110, 0.5)',
        padding: rs(10),
        borderRadius: rs(10)
    },
    dataContent: {
        backgroundColor: 'rgba(187, 110, 110, 0.5)',
        padding: rs(10),
        borderRadius: rs(10),
        marginTop: rs(20)
    }
})