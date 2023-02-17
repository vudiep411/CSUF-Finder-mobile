import React from 'react'
import { View, Text } from 'react-native'
import { COLORS, FONTS, SIZES } from "../constants";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation()

  return (
    <View
        style={{
            padding: SIZES.large,
            backgroundColor: COLORS.primary
        }}
    >
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
            
        }}>
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: SIZES.large,
                    color: COLORS.white,
                    marginTop: 35
                }}
            >
                Finder
            </Text>
            <Icon
                style={{ marginTop: 35 }} 
                onPress={() => navigation.navigate("Buildings")}
                name="search" 
                size={SIZES.large + 2} 
                color={COLORS.white}
            />
        </View>
    </View>
  )
}

export default Header