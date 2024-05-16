import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { styles } from './BottomNav.style'
import { NavProps } from '../../types/Types'

export const BottomNav: React.FC<NavProps> = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('Fridge')} style={styles.route}>
        <Text style={styles.routeText}>Fridge</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Agenda')} style={styles.route}>
        <Text style={styles.routeText}>Agenda</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ShoppingList')} style={styles.route}>
        <Text style={styles.routeText}>ShoppingList</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Meals')} style={styles.route}>
        <Text style={styles.routeText}>Meals</Text>
      </TouchableOpacity>
    </View>
  )
}
