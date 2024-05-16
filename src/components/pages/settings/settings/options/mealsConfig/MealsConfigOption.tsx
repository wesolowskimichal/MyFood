import { Button, View, Text, Image, TouchableOpacity, ScrollView, ToastAndroid, BackHandler } from 'react-native'
import { Meal, RenderChildProps, SettingsRenderName } from '../../../../../../types/Types'
import { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from './MealsConfigOption.style'
import { MealView } from '../../../../../../views/meal/MealView'
import { useFocusEffect } from '@react-navigation/native'
import Loader from '../../../../../../views/loader/Loader'

// default meals confing
// number of meals = 3
// names = breakfast, lunch, dinner

export const MealsConfigOption = ({ setRender }: RenderChildProps<SettingsRenderName>) => {
  const [meals, setMeals] = useState<Meal[]>([])
  const [changed, setChanged] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleMealChange = (updatedMeal: Meal, index: number) => {
    setMeals(prevMeals => {
      const updatedMeals = [...prevMeals]
      updatedMeals[index] = updatedMeal
      return updatedMeals
    })
    setChanged(true)
  }

  const addMeal = () => {
    ToastAndroid.show('Meal was added', ToastAndroid.SHORT)
    setMeals(prevMeals => [...prevMeals, { name: `Meal ${prevMeals.length + 1}` }])
  }

  const saveMeals = async () => {
    await AsyncStorage.setItem('mealsConfig', JSON.stringify(meals))
    ToastAndroid.show('Meals configuration was saved', ToastAndroid.SHORT)
  }

  const removeLastMeal = () => {
    ToastAndroid.show('Last meal was removed', ToastAndroid.SHORT)
    setMeals(prevMeals => {
      if (prevMeals.length > 0) {
        return prevMeals.slice(0, -1)
      } else {
        return prevMeals
      }
    })
  }

  const removeMeal = (index: number) => {
    setMeals(prevMeals => {
      if (index >= 0 && index < prevMeals.length) {
        return prevMeals.filter((_, i) => i !== index)
      }
      return prevMeals
    })
  }

  // TODO: add loading animation on await
  const loadMealsConfigCallback = useCallback(async () => {
    try {
      const defaultMeals: Meal[] = [{ name: 'Breakfast' }, { name: 'Lunch' }, { name: 'Dinner' }]
      const mealsConfigJson = await AsyncStorage.getItem('mealsConfig')
      setLoading(false)
      if (mealsConfigJson !== null) {
        const mealsConfig: Meal[] = JSON.parse(mealsConfigJson)
        setMeals(mealsConfig)
      } else {
        setMeals(defaultMeals)
      }
    } catch (error) {
      console.error(error)
    }
  }, [])

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        setRender('options')
        return true
      }
      BackHandler.addEventListener('hardwareBackPress', onBackPress)
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [])
  )

  useEffect(() => {
    loadMealsConfigCallback()
  }, [loadMealsConfigCallback])

  return loading ? (
    <View style={styles.loaderWrapper}>
      <Loader />
    </View>
  ) : (
    <View style={styles.wrapper}>
      <View style={styles.mealsNumberBox}>
        <View style={styles.mealsNumberBoxTextWrapper}>
          <Text style={styles.mealsNumberBoxText}>Number of meals:</Text>
        </View>
        <View style={styles.mealsNumberBoxValueWrapper}>
          <Text style={styles.mealsNumberBoxValue}>{meals.length}</Text>
        </View>
        <View style={styles.mealsNumberBoxButtonsWrapper}>
          <TouchableOpacity style={styles.mealsNumberBoxButton} onPress={() => removeLastMeal()}>
            <Text style={styles.mealsNumberBoxButtonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mealsNumberBoxButton} onPress={() => addMeal()}>
            <Text style={styles.mealsNumberBoxButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.mealsContainer}>
        {meals.map((meal, index) => (
          <MealView
            key={index}
            meal={meal}
            onChange={(updatedMeal: Meal) => handleMealChange(updatedMeal, index)}
            removeMeal={() => removeMeal(index)}
          />
        ))}
      </ScrollView>
      {changed && (
        <TouchableOpacity onPress={() => saveMeals()} style={styles.saveConfigButton}>
          <Text>SAVE</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
