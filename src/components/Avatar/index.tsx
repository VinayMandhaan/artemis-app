import { Image, View } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import AntDesign from '@react-native-vector-icons/ant-design'
import Ionicons from '@react-native-vector-icons/ionicons'
import { Colors, Fonts } from "../../utils/theme";
import styles from "./styles";

const Avatar = ({ image, overlay, isSelected }: any) => {
    const animatedStyle = useAnimatedStyle(() => ({
        backgroundColor: withTiming(overlay ? 'rgba(0, 0, 0, 0.32)' : 'transparent'),
    }));
    const animateCheckStyle = useAnimatedStyle(() => ({
        transform: [
            { translateY: withTiming(isSelected ? 6 : -10) },
            { scale: withTiming(isSelected ? 1.2 : 0) },
        ],
    }));

    return (
        <View style={styles.container}>
            <Image
                source={{uri:image}}
                style={styles.imageStyle}
            />
            <Animated.View
                style={[animatedStyle, styles.overlay]}
            />
            <Animated.View style={[animateCheckStyle, styles.iconStyle]}>
                <AntDesign name='check' color={'white'} size={10} />
            </Animated.View>
        </View>
    );
};

export default Avatar;
