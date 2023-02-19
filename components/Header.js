import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from "../constants";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text}>Finder</Text>
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

const styles = StyleSheet.create({
    container: {
        padding: SIZES.large,
        backgroundColor: COLORS.primary
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between' 
    },
    
    text: {
        fontWeight: 'bold',
        fontSize: SIZES.large,
        color: COLORS.white,
        marginTop: 35       
    }
});


export default Header