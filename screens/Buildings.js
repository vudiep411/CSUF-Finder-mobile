import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useContext } from 'react'
import Searchbar from '../components/Searchbar'
import BuildingCard from '../components/BuildingCard'
import { BUILDING_NAMES } from '../constants/coordinates'
import { SIZES, COLORS } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import { MapContext } from '../context/Context'


const Buildings = () => {
    const [buildings, setBuildings] = useState(BUILDING_NAMES)
    const navigation = useNavigation()   
    const { mapRef, setBuildingPos } = useContext(MapContext)
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity style={{ marginTop: 30, marginLeft: 25 }}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.text}>
                    <Icon name="chevron-left"/>
                    &nbsp;Back
                </Text>
            </TouchableOpacity>
        </View>
        <Searchbar setBuildings={setBuildings} data={BUILDING_NAMES}/>
        <FlatList
        style={{ marginBottom: 150}}
            data={buildings}
            renderItem={({ item }) => <BuildingCard name={item} mapRef={mapRef} navigation={navigation} setBuildingPos={setBuildingPos}/>}
            // keyExtractor={(item) => item.id}
            // showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
    },

    header: {
        backgroundColor: COLORS.primary,
        paddingTop: SIZES.large,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    text: {
        color: COLORS.white,
        fontSize: SIZES.large        
    }
});

export default Buildings