import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/theme';

export default StyleSheet.create({
    container: {
        position: 'relative', borderRadius: 50, height: 64, width: 64, marginHorizontal: 8
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.32)',
        borderRadius: 50
    },
    iconStyle: {
        position: 'absolute', bottom: 0, left: '36%', borderRadius:'50%', width:18, height:18, alignItems:'center', justifyContent:'center', backgroundColor:Colors.primary
    }
});
