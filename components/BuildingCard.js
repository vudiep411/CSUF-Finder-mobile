import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { COLORS, SIZES, FONTS } from '../constants'
import { BUILDINGS_COORDS } from '../constants/coordinates'
import { getRouteInfo } from '../constants/constants'
import { MapContext } from '../context/Context'
import { GOOGLE_API_KEY } from '@env'

const BuildingCard = ({ name, mapRef, navigation, setBuildingPos }) => {
    const { currentLocation, setIsPopup, setPopUpInfo } = useContext(MapContext)

    const handlePress = async () => {
        const key = name.split('-')[0]
        mapRef?.current.animateToRegion(BUILDINGS_COORDS[key])
        setBuildingPos(BUILDINGS_COORDS[key])
        const info = await getRouteInfo(currentLocation.latitude, currentLocation.longitude, 
            BUILDINGS_COORDS[key].latitude, BUILDINGS_COORDS[key].longitude, GOOGLE_API_KEY)
        // console.log(info)
        setPopUpInfo({
            duration: info.duration,
            distance: info.distance,
            buildingName: name
        })
        setIsPopup(true)
        navigation.goBack()
    }
    
  return (
    <TouchableOpacity onPress={handlePress}>
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        borderColor: 'gray',
        borderWidth: 1
    },

    text: {
        fontSize: SIZES.medium, 
        fontWeight: 'bold'  
    }
});

export default BuildingCard