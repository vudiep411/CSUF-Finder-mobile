import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Map from '../components/Map'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CSUFCoords } from '../constants/coordinates';
import { useContext } from 'react';
import { MapContext } from '../context/Context';
import { COLORS, SIZES } from '../constants';
import RouteInfo from '../components/RouteInfo';

const Home = () => {
  const { mapRef, currentLocation, isPopup } = useContext(MapContext)

  const handlePanto = (mapRef, coordinate) => {
    mapRef?.current.animateToRegion(coordinate)
  }

  return (
    <View>
      <Header/>
      <Map/>
      <TouchableOpacity 
        style={{
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
        }}
        onPress={() => handlePanto(mapRef, currentLocation)}
      >
        <Icon
          name='user-circle'
          color={COLORS.white}
          size={SIZES.large}
        />
      </TouchableOpacity>
      <TouchableOpacity 
        style={{
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
        }}
        onPress={() => handlePanto(mapRef, CSUFCoords)}
      >
        <Icon
          name='school'
          color={COLORS.white}
          size={SIZES.large}
        />
      </TouchableOpacity>
      { isPopup && <RouteInfo/>}
    </View>
  )
}

export default Home