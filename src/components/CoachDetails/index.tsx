import React from 'react';
import { View, Image } from 'react-native';
import { Colors, Fonts } from '../../utils/theme';
import CustomText from '../Generics/CustomText';
import styles from './styles';

const CoachDetails = ({ data }: any) => {


    const renderListing = (title: string, value: string) => {
        return (
            <View style={styles.listingContainer}>
                <CustomText title={title} fontFamily={Fonts.Font_Primary} fontSize={14} color={Colors.textFilter} />
                <CustomText title={value} fontFamily={Fonts.Font_Semi_Bold} fontSize={14} />
            </View>
        )
    }

    return (
        <View style={styles.detailsContainer}>
            <View style={styles.border}>
                <CustomText title='COACH' fontFamily={Fonts.Font_Semi_Bold} fontSize={14} color={'#4F5466'} />
            </View>
            <View style={styles.avatarContainer}>
                <Image source={{ uri: `http://localhost:5000/uploads/images/User06c.png` }} style={styles.avatar} />
                <View style={{ marginLeft: 12 }}>
                    <CustomText title={data?.name} fontFamily={Fonts.Font_Semi_Bold} fontSize={16} />
                    <CustomText title={data?.position} fontFamily={Fonts.Font_Primary} fontSize={14} color={Colors.textGrey} />
                </View>
            </View>
            <View style={{ marginTop: 12 }}>
                {renderListing('Years of Experience', data?.experience)}
                {renderListing('Qualification', 'Level 2 Swimming Teacher')}
                {renderListing('Email', data?.email)}
                {renderListing('Academy', 'Trojan Sports Academy')}
            </View>
        </View>
    )
};


export default CoachDetails