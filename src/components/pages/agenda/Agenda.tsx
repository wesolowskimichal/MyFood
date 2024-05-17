import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, View, Text } from 'react-native'
import { AgendaMeal, Meal, RootStackParamList } from '../../../types/Types'
import { BottomNav } from '../../bottomNav/BottomNav'
import { Page } from '../page/Page'
import { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

type AgendaPageProps = NativeStackScreenProps<RootStackParamList, 'Agenda'>
export const AgendaPage: React.FC<AgendaPageProps> = props => {
  // const [meals, setMeals] = useState<AgendaMeal[]>([])
  // const [loading, setLoading] = useState(false)

  // const loadMealsConfigCallback = useCallback(async () => {
  //   const defaultMeals: Meal[] = [{ name: 'Breakfast' }, { name: 'Lunch' }, { name: 'Dinner' }]
  //   const mealsConfigJson = await AsyncStorage.getItem('mealsConfig')
  //   setLoading(false)
  //   if (mealsConfigJson !== null) {
  //     const mealsConfig: Meal[] = JSON.parse(mealsConfigJson)
  //     setMeals(mealsConfig)
  //   } else {
  //     setMeals(defaultMeals)
  //   }
  // }, [])

  // const loadTodayAgenda = useCallback(async () => {}, [])

  // useEffect(() => {
  //   loadMealsConfigCallback()
  // }, [loadMealsConfigCallback])

  return (
    <Page navigation={props.navigation}>
      <Text>Agenda</Text>
    </Page>
  )
}
