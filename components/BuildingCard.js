import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../constants'

const BuildingCard = ({ name }) => {
  return (
    <TouchableOpacity>
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