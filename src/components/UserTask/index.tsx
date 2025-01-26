import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { Colors, Fonts } from '../../utils/theme';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AntDesign from '@react-native-vector-icons/ant-design'
import CustomText from '../Generics/CustomText';
import styles from './styles';
import Checkbox from '../Checkbox';


const UserTask = ({ userData, count }: any) => {


    const [displayData, setDisplayData] = useState(false)

    const heightAnimation = useSharedValue(200);
    const opacityAnimation = useSharedValue(0);
    const containerHeight = useSharedValue(displayData ? 350 : 0);


    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(heightAnimation.value, { duration: 300 }),
        };
    });

    const fadeStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(opacityAnimation.value, { duration: 400 }),
            height: withTiming(containerHeight.value, { duration: 400 }),
            marginLeft: 16,
            marginRight: 16,
            marginTop: withTiming(containerHeight.value > 0 ? 16 : 0),
            backgroundColor: 'white',
            paddingTop: withTiming(containerHeight.value > 0 ? 16 : 0),
            paddingLeft: 12,
            paddingRight: 12,
            paddingBottom: 12,
            borderRadius: 8
        };
    });

    const toggleDisplay = () => {
        setDisplayData(!displayData);
        heightAnimation.value = displayData ? 0 : 200;
        containerHeight.value = displayData ? 150 : 350
    };

    useEffect(() => {
        getData(userData)
    }, [userData])

    const getData = (data: any) => {
        if (data?.length > 0) {
            opacityAnimation.value = 1;
            containerHeight.value = 350
            heightAnimation.value = 200
            setDisplayData(true)
        } else {
            opacityAnimation.value = 0;
            containerHeight.value = 0;
            setDisplayData(false)
        }
    }



    const renderItem = (data: any, index: any) => {
        return (
            <View key={index} style={styles.itemContainer}>
                <View style={[styles.itemStyle, {
                    width: '70%'
                }]}>
                    <CustomText title={index + 1 + '.'} fontFamily={Fonts.Font_Primary} fontSize={14} />
                    <CustomText title={' ' + data?.title} fontFamily={Fonts.Font_Primary} fontSize={14} />
                </View>
                <View style={[styles.itemStyle, { width: '30%' }]}>

                    <View style={{ display: 'flex', alignItems: 'flex-end', width: '70%' }}>
                        <Checkbox checked={userData[0]?.modules[0]?.submodules[index]?.completed} />
                    </View>
                    {
                        data?.isVideo && (
                            <View style={{ display: 'flex', alignItems: 'flex-end', width: '30%' }}>
                                <Image source={require('../../assets/icons/video-circle.png')} />
                            </View>
                        )
                    }


                </View>
            </View>
        )
    }


    return (
        <Animated.View style={[fadeStyle]}>
            <View style={styles.container}>
                <View style={{ width: '20%' }}>

                    <AnimatedCircularProgress
                        size={64}
                        width={4}
                        fill={count * 10}
                        rotation={0}
                        lineCap={'round'}
                        tintColor={Colors.primary}
                        backgroundColor="#F5F5F5"
                    >
                        {
                            (fill) => (
                                <>
                                    <Text style={{ fontFamily: Fonts.Font_Primary, fontSize: 12 }}><Text style={{ fontFamily: Fonts.Font_Semi_Bold }}>{count}</Text> of {userData[0]?.modules[0]?.submodules?.length}</Text>
                                    <Text style={{ fontFamily: Fonts.Font_Primary, fontSize: 9 }}>Completed</Text>
                                </>

                            )
                        }
                    </AnimatedCircularProgress>
                </View>
                <View style={{ width: '80%', marginLeft: 12 }}>
                    <CustomText title='LEARN TO SWIM STAGE 1 OUTCOMES' fontFamily={Fonts.Font_Semi_Bold} fontSize={14} />
                    <CustomText title='Your a 25% better than other members' fontFamily={Fonts.Font_Primary} color={'#525252'} fontSize={14} />
                </View>
            </View>
            {
                <>

                    <Animated.View style={[{ marginTop: 4 }, animatedStyle]}>
                        {
                            displayData && (
                                <View style={styles.headerContainer}>
                                    <CustomText title='LEARN TO SWIM STAGE 1 OUTCOMES' fontFamily={Fonts.Font_Semi_Bold} fontSize={14} />
                                    <Image source={require('../../assets/icons/video-circle.png')} />
                                </View>
                            )
                        }

                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1 }}
                            nestedScrollEnabled
                            style={{ height: 200 }}
                            showsVerticalScrollIndicator={false}
                        >
                            {
                                userData?.length > 0 && userData[0]?.modules[0]?.moduleId?.sub_modules?.map((v, i) => {
                                    return renderItem(v, i)
                                })
                            }
                        </ScrollView>
                    </Animated.View>
                </>
            }
            <TouchableOpacity onPress={() => {
                toggleDisplay()
            }} style={styles.iconStyle}>
                {
                    displayData ? (
                        <AntDesign name='up' />
                    ) : (
                        <AntDesign name='down' />

                    )
                }
            </TouchableOpacity>
        </Animated.View>
    )
}

export default UserTask