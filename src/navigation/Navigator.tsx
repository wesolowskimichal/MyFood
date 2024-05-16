import * as React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/Types'
import { AgendaPage } from '../components/pages/agenda/Agenda'
import { FridgePage } from '../components/pages/fridge/Fridge'
import { ShoppingListPage } from '../components/pages/shoppingList/ShppingList'
import { MealsPage } from '../components/pages/meals/Meals'
import { SettingsPage } from '../components/pages/settings/SettingsPage'

const Stack = createNativeStackNavigator<RootStackParamList>()

const settingsHeaderStyles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#222831'
  }
})

export function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Agenda"
          component={AgendaPage}
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right'
          }}
        />
        <Stack.Screen
          name="Fridge"
          component={FridgePage}
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_left'
          }}
        />
        <Stack.Screen
          name="ShoppingList"
          component={ShoppingListPage}
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right'
          }}
        />
        <Stack.Screen
          name="Meals"
          component={MealsPage}
          options={{
            headerShown: false,
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right'
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsPage}
          options={{
            headerStyle: {
              backgroundColor: '#222831'
            },
            headerTintColor: '#eee',
            presentation: 'modal',
            animationTypeForReplace: 'push',
            animation: 'slide_from_right'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
