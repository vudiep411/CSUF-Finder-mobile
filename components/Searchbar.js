import React from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS, SIZES } from "../constants";
import Icon from 'react-native-vector-icons/FontAwesome';

const Searchbar = ({ setBuildings, data }) => {

    const handleSearch = (value) => {
        if(value.length > 0) {
            const filteredData = data.filter((item) => 
                item.toLowerCase().includes(value.toLowerCase())
            )
            setBuildings(filteredData)
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
                <Icon
                    style={{marginRight: 10}}
                    name="search" 
                    size={SIZES.large + 2} 
                    color={COLORS.white}
                />
            </TouchableOpacity>
            <TextInput
                style={{ width: '100%' }}
                placeholder='Search your buildings'
                onChangeText={handleSearch}
            />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        padding: SIZES.large,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    header: {
        width: "100%",
        borderRadius: SIZES.font,
        backgroundColor: COLORS.gray,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small
    },
});
export default Searchbar