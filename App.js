import React, { useRef, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Home from './screens/Home'
import Buildings from './screens/Buildings';
import { MapContext } from './context/Context';

const Stack = createStackNavigator()
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

export default function App() {
  const mapRef = useRef(null)
  const [buildingPos, setBuildingPos] = useState(null)
  const [isPopup, setIsPopup] = useState(false)
  const [currentLocation, setCurrentLocation] = useState(null)
  const [popupInfo, setPopUpInfo] = useState({
    duration: 0,
    distance: 0,
    buildingName: ''
  })

  return (
    <MapContext.Provider value=
      {{ mapRef, buildingPos, setBuildingPos, 
        isPopup, setIsPopup, currentLocation, setCurrentLocation,
        popupInfo, setPopUpInfo
      }}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Buildings" component={Buildings}/>
        </Stack.Navigator>
      </NavigationContainer>
    </MapContext.Provider>
  );
}

