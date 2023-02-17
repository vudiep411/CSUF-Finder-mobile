import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES } from "../constants";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Searchbar = ({ setBuildings, data }) => {
    const navigation = useNavigation()

    const handleSearch = (value) => {
        if(value.length > 0) {
            const filteredData = data.filter((item) => 
                item.toLowerCase().includes(value.toLowerCase())
            )
            setBuildings(filteredData)
        }
    }

  return (
    <View
        style={{
            padding: SIZES.large,
            backgroundColor: COLORS.primary,
            flexDirection: 'row',
            justifyContent: 'center'
        }}
    >
        <View 
            style={{
                width: "100%",
                borderRadius: SIZES.font,
                backgroundColor: COLORS.gray,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.small
              }}
        >
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

export default Searchbar