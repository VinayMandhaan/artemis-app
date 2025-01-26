import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Colors, Fonts } from '../../utils/theme';
import styles from './styles';
import CustomText from '../Generics/CustomText';


const Categories = ({ data }: any) => {
    return (
        <View style={{ padding: 16 }}>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View
                        style={[styles.container, {
                            borderBottomWidth: item?.selected ? 4 : 0,
                        }]}
                    >
                        <CustomText title={item.title} fontFamily={item?.selected ? Fonts.Font_Semi_Bold : Fonts.Font_Primary} fontSize={14} color={item.selected ? Colors.primary : 'black'} />
                    </View>
                )}
            />
        </View>
    )
}

export default Categories