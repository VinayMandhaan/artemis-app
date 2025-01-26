import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/theme';

export default StyleSheet.create({
    detailsContainer: {
        backgroundColor: 'white', marginLeft: 16, marginRight: 16, marginTop: 16, paddingTop: 16, paddingLeft: 12, paddingRight: 12, paddingBottom: 12, borderRadius: 8, marginBottom: 12
    },
    listingContainer: {
        borderBottomWidth: 1, borderBottomColor: Colors.borderColor, paddingBottom: 8, marginTop: 8
    },
    border: {
        borderBottomWidth: 1, borderBottomColor: Colors.borderColor, paddingBottom: 14
    },
    avatarContainer: {
        display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20 
    },
    avatar: {
        width: 40, height: 40, borderRadius: 50 
    }
});
