import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../constants'
import { BUILDINGS_COORDS } from '../constants/coordinates'

const BuildingCard = ({ name, mapRef, navigation, setBuildingPos }) => {
    const handlePress = () => {
        const key = name.split('-')[0]
        mapRef?.current.animateToRegion(BUILDINGS_COORDS[key])
        setBuildingPos(BUILDINGS_COORDS[key])
        navigation.goBack()
    }
    
  return (
    <TouchableOpacity onPress={handlePress}>
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 20,
                borderColor: 'gray',
                borderWidth: 1
            }}

        >
                <Text
                    style={{
                        fontSize: SIZES.medium,
                        fontWeight: 'bold'
                    }}
                >
                    {name}
                </Text>
        </View>
    </TouchableOpacity>
  )
}

export default BuildingCard