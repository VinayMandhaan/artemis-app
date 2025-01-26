import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { Colors, Fonts } from '../../utils/theme'
import styles from './styles'
import CustomText from '../Generics/CustomText'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={{ paddingLeft: 16 }}>
                <CustomText style={{ lineHeight: 21, letterSpacing: 4 }} fontFamily={Fonts.NunitoSans_Bold} title='ARTEMIS' color={Colors.primary} fontSize={16} />
                {/* <Text style={{ fontFamily: Fonts.NunitoSans_Bold, color: Colors.primary, fontSize: 16, lineHeight: 21, letterSpacing: 4 }}>ARTEMIS</Text> */}
            </View>
            <View style={{ paddingRight: 16 }}>
                <Image source={require('../../assets/images/avatar.png')} />
            </View>
        </View>
    )
}

export default Header