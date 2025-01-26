import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/theme';

export default StyleSheet.create({
    checkedStyle: {
        backgroundColor: Colors.primary, borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4, marginRight: 8, width: '30%'  
    },
    checkboxStyle: {
        borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4, marginRight: 8, width: '30%', borderColor: Colors.primary, borderWidth: 1
    }
});
