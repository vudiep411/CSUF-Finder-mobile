import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { CSUFCoords } from '../constants/coordinates';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { MapContext } from '../context/Context';
import { useContext } from 'react';

const Map = ({ currentLocation, setCurrentLocation }) => {
    // const [region, setRegion] = useState(currentLocation);
    const { mapRef, buildingPos } = useContext(MapContext)
    // console.log(region)
    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            return;
          }
    
          let location = await Location.watchPositionAsync(
            {
              accuracy: Location.Accuracy.High,
              timeInterval: 1000, // update location every 5 seconds
              mayShowUserSettingsDialog: true
            },
            (newLocation) => setCurrentLocation(newLocation.coords)
          );
        })();
      }, []);

    return (
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          style={styles.map}
          region={{
            latitude: currentLocation?.latitude,
            longitude: currentLocation?.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
          }}
          // onRegionChangeComplete={(region) => setRegion(region)}
          showsUserLocation={true}
        >
            {/* <Marker coordinate={CSUFCoords} title="California State University Fullerton" /> */}
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