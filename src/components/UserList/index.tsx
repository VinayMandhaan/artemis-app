import React, { useState, useRef } from 'react';
import { TouchableOpacity, ScrollView, Dimensions, View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Avatar from '../Avatar';
import styles from './styles';


const UserList = ({ users, selectUser }: any) => {
    const scrollViewRef = useRef(null);
    const screenWidth = Dimensions.get('window').width;
    const [selectedUser, setSelectedUser] = useState(0);


    const handleAvatarPress = (index: any) => {
        setSelectedUser(index);

        const avatarWidth = 64;
        const avatarMargin = 20;
        const totalWidth = avatarWidth + avatarMargin;

        const offset = index * totalWidth - 10;

        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({
                x: offset,
                animated: true
            });
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                contentContainerStyle={{
                    padding: 16,
                    paddingHorizontal: (screenWidth - 64) / 2
                }}
                showsHorizontalScrollIndicator={false}
            >
                {
                    users && users?.map((item: any, index: any) => {
                        const isSelected = selectedUser === index;
                        const animatedStyle = useAnimatedStyle(() => ({
                            transform: [
                                { translateY: withTiming(isSelected ? 0 : 0) },
                                { scale: withTiming(isSelected ? 1.2 : 1) },
                            ],
                            opacity: withTiming(isSelected || selectedUser === null ? 1 : 1)
                        }));
                        return (
                            <TouchableOpacity key={index} onPress={() => {
                                handleAvatarPress(index)
                                selectUser(item)
                            }}>
                                <Animated.View style={[animatedStyle, { position: 'relative' }]}>
                                    <Avatar image={item?.profile_photo} overlay={!isSelected} isSelected={isSelected} />
                                </Animated.View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default UserList
