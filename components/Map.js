import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { CSUFCoords } from '../constants/coordinates';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { MapContext } from '../context/Context';
import { useContext } from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API_KEY } from '@env'

const Map = () => {
    const { mapRef, buildingPos, currentLocation, setCurrentLocation } = useContext(MapContext)

    // const handleUserLocationChange = event => {
    //   const { latitude, longitude } = event.nativeEvent.coordinate;
    //   setCurrentLocation({
    //     latitude,
    //     longitude,
    //     latitudeDelta: 0.01,
    //     longitudeDelta: 0.01,
    //   });
    // };

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            return;
          }
            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation(location.coords)
          } 
        )();
      }, [buildingPos]);

    return (
      <View style={styles.container}>
        <MapView
          loadingEnabled={true}
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: currentLocation ? currentLocation.latitude : CSUFCoords.latitude,
            longitude: currentLocation ? currentLocation.longitude : CSUFCoords.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
          }}
          showsUserLocation={true}
          // followsUserLocation={isTracking}
          // onUserLocationChange={handleUserLocationChange}
        >   
            <MapViewDirections
              origin={currentLocation}
              destination={buildingPos}
              apikey={GOOGLE_API_KEY}
              strokeWidth={8}
              strokeColor='#007FFF'
            />
            <Marker coordinate={buildingPos} />
        </MapView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    map: {
      width: '100%',
      height: '100%'
    },
  });
  

export default Map