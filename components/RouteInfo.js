import { View, Text, StyleSheet  } from 'react-native'
import React, { useContext, useRef } from 'react'
import { MapContext } from '../context/Context'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../constants'
import BottomSheet, { TouchableOpacity } from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';

const RouteInfo = () => {
  const { popupInfo, setIsPopup, setBuildingPos, mapRef, currentLocation } = useContext(MapContext)
  const bottomRef = useRef()

  const handleClose = () => {
    setIsPopup(false)
    setBuildingPos(null)
  }

  const handleGo = () => {
    const zoomLevel = {
      ...currentLocation,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005, 
    }
    mapRef?.current.animateToRegion(zoomLevel)
    setIsPopup(false)
  }

  return (
    <BottomSheet
      handleStyle={{
        backgroundColor: COLORS.primary,
      }}
      handleIndicatorStyle={{
        backgroundColor: COLORS.white
      }}
      ref={bottomRef}
      snapPoints={['30%', '18%', '60%']}
    >
      <View 
        style={styles.container}
      >
        <View
          style={styles.header}
        >
          <Text style={styles.title}>{popupInfo.buildingName}</Text>
          <TouchableOpacity onPress={handleClose}>
            <Icon name="close" size={20} color="gray" />
          </TouchableOpacity>
        </View>

        <View 
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <View>
            <Text style={styles.text}>Distance:</Text>
            <Text style={styles.text}>{popupInfo.distance}</Text>
          </View>
          <View>
            <Text style={styles.text}>Duration:</Text>
            <Text style={styles.text}>{popupInfo.duration}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleGo}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
        </View>

      </View>
    </BottomSheet>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    height: '100%',
  },

  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  text: {
    fontSize: SIZES.large,
    color: COLORS.white,
    marginBottom: 5
  },

  title: {
    fontSize: SIZES.extraLarge,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 40
  },

  button: {
    padding: 15,
    backgroundColor: 'green',
    borderRadius: 10
  },

  buttonText: {
    fontSize: SIZES.large,
    color: COLORS.white,    
    fontWeight: 'bold'
  }
});

export default RouteInfo