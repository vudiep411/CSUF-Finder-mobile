import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { CSUFCoords } from '../constants/coordinates';
import * as Location from 'expo-location';

const Map = () => {
    const [region, setRegion] = useState({
      latitude: 33.88251681175372,
      longitude: -117.88512475905357,
      latitudeDelta: 0.009,
      longitudeDelta: 0.009,
    });
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setCurrentLocation(location.coords);
        })();
      }, []);

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={CSUFCoords}
          region={{
            latitude: currentLocation?.latitude,
            longitude: currentLocation?.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
          }}
          onRegionChangeComplete={(region) => setRegion(region)}
          showsUserLocation={true}
        >
            <Marker coordinate={CSUFCoords} title="School" />
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