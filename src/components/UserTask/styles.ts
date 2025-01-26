import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/theme';

export default StyleSheet.create({
    container: {
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    itemContainer: {
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8
    },
    iconStyle: {
        display: 'flex', alignItems: 'center', justifyContent: 'center', borderTopWidth: 1, borderTopColor: Colors.borderColor, paddingTop: 14, marginTop: 16
    },
    headerContainer: {
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, borderBottomWidth: 1, borderBottomColor: Colors.borderColor, paddingBottom: 16
    },
    itemStyle: {
        display: 'flex', flexDirection: 'row'
    }
});
