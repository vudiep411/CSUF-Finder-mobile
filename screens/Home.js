import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Map from '../components/Map'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CSUFCoords } from '../constants/coordinates';
import { useContext } from 'react';
import { MapContext } from '../context/Context';
import { COLORS, SIZES } from '../constants';
import RouteInfo from '../components/RouteInfo';

const Home = () => {
  const { mapRef, currentLocation, isPopup, buildingPos, setBuildingPos } = useContext(MapContext)

  const handlePanto = (mapRef, coordinate) => {
    mapRef?.current.animateToRegion(coordinate)
  }

  const handleCancel = () => {
    setBuildingPos(null)
    mapRef?.current.animateToRegion(currentLocation)
  }

  return (
    <View>
      <Header/>
      <Map/>
      <TouchableOpacity 
        style={styles.schoolButton}
        onPress={() => handlePanto(mapRef, CSUFCoords)}
      >
        <Icon
          name='school'
          color={COLORS.white}
          size={SIZES.large}
        />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.currentButton}
        onPress={() => handlePanto(mapRef, currentLocation)}
        >
        <Icon
          name='user-circle'
          color={COLORS.white}
          size={SIZES.large}
          />
      </TouchableOpacity>
      {buildingPos && 
        <TouchableOpacity style={styles.clearButton} onPress={handleCancel}>
          <Icon name="times" size={20} color="white" />
        </TouchableOpacity>
      }
      { isPopup && <RouteInfo/>}
    </View>
  )
}

const styles = StyleSheet.create({
  schoolButton: {
    width: 40,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 10,
    position: 'absolute',
    alignItems: "center",
    justifyContent: "center",
    bottom: 120,
    left: 20,
    borderColor: COLORS.white
  },
  currentButton: {
    width: 40,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 10,
    position: 'absolute',
    alignItems: "center",
    justifyContent: "center",
    bottom: 120,
    left: 70,
    borderColor: COLORS.white
  },
  clearButton: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 10,
    position: 'absolute',
    alignItems: "center",
    justifyContent: "center",
    bottom: 120,
    right: 10,
    borderColor: COLORS.white
  }
});
export default Home