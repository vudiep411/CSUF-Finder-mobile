import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Map from '../components/Map'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CSUFCoords } from '../constants/coordinates';

import { COLORS, SIZES } from '../constants';

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const mapRef = useRef(null)

  const handlePanto = (mapRef, coordinate) => {
    mapRef?.current.animateToRegion(coordinate)
  }

  return (
    <View>
      <Header/>
      <Map currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} mapRef={mapRef}/>
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
    </View>
  )
}

export default Home