import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { Colors, Fonts } from '../../utils/theme';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AntDesign from '@react-native-vector-icons/ant-design'
import CustomText from '../Generics/CustomText';
import styles from './styles';


const Checkbox = ({ checked }: any) => {
    if (checked) {
        return (
            <TouchableOpacity style={styles.checkedStyle}>
                <AntDesign name='check' color={'white'} size={10} />
            </TouchableOpacity>
        )

    }
    return (
        <TouchableOpacity style={styles.checkboxStyle}>
            <AntDesign name='check' color={'white'} size={10} />
        </TouchableOpacity>
    )
}

export default Checkbox