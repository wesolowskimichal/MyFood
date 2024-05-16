import { Image, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { FoodMacroElements, Meal } from '../../types/Types'
import { styles } from './MealView.style'
import { useEffect, useState } from 'react'

type MealViewProps = {
  meal: Meal
  onChange: any
  removeMeal: any
}

export const MealView = ({ meal, onChange, removeMeal }: MealViewProps) => {
  const [kcal, setKcal] = useState<number | '-'>('-')
  const [proteins, setProteins] = useState<number | undefined>()
  const [carbohydrates, setCarbohydrates] = useState<number | undefined>()
  const [fats, setFats] = useState<number | undefined>()

  const countKcal = (): number | '-' => {
    return proteins || carbohydrates || fats ? ((proteins ?? 0) + (carbohydrates ?? 0)) * 4 + (fats ?? 0) * 9 : '-'
  }

  const isMacroZero = (fieldName: keyof FoodMacroElements): boolean => {
    if (!meal.macro) {
      return true
    }

    if (fieldName === 'carbohydrates') {
      return (
        (meal.macro.carbohydrates === 0 || meal.macro.carbohydrates === 1) &&
        meal.macro.fats === 0 &&
        meal.macro.proteins === 0
      )
    } else if (fieldName === 'fats') {
      return (
        (meal.macro.fats === 0 || meal.macro.fats === 1) && meal.macro.carbohydrates === 0 && meal.macro.proteins === 0
      )
    }
    return (
      (meal.macro.proteins === 0 || meal.macro.proteins === 1) &&
      meal.macro.carbohydrates === 0 &&
      meal.macro.fats === 0
    )
  }

  const isMakroUndefined = (fieldName: keyof FoodMacroElements, value: string): boolean => {
    return value.length == 0 && isMacroZero(fieldName)
  }

  const handleMacroChange = (fieldName: keyof FoodMacroElements, value: string) => {
    const updatedMeal: Meal = {
      ...meal,
      macro: isMakroUndefined(fieldName, value)
        ? undefined
        : {
            ...(meal.macro || { proteins: 0, fats: 0, carbohydrates: 0 }),
            [fieldName]: Number(value)
          }
    }
    onChange(updatedMeal)
  }

  useEffect(() => {
    setProteins(meal.macro?.proteins)
    setCarbohydrates(meal.macro?.carbohydrates)
    setFats(meal.macro?.fats)
  }, [meal])

  useEffect(() => {
    setKcal(countKcal())
  }, [proteins, carbohydrates, fats])

  const handleRemoveMeal = () => {
    ToastAndroid.show('Meal was removed', ToastAndroid.SHORT)
    removeMeal()
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.headerNameWrapper}>
          <Text style={styles.headerText}>Name</Text>
          <TouchableOpacity style={styles.removeMealButton} onPress={() => handleRemoveMeal()}>
            <Image style={styles.removeMealButtonImage} source={require('../../../assets/trash_icon.png')} />
          </TouchableOpacity>
        </View>
        <TextInput style={styles.headerValue}>{meal.name}</TextInput>
      </View>
      <View style={styles.macroBox}>
        <View style={styles.macroBoxElement}>
          <Text style={[styles.macroBoxElementText, styles.kcalText]}>kcal</Text>
          <TextInput style={styles.kcalValue} editable={false}>
            {kcal}
          </TextInput>
        </View>
        <View style={styles.macroBoxElement}>
          <Text style={[styles.macroBoxElementText, styles.proteinsText]}>Proteins</Text>
          <TextInput
            style={styles.fatsValue}
            placeholder="-"
            placeholderTextColor="rgb(207, 232, 63)"
            keyboardType="numeric"
            value={proteins && proteins !== 0 ? String(proteins) : ''}
            onChangeText={(proteins: string) => handleMacroChange('proteins', proteins)}
          />
        </View>
        <View style={styles.macroBoxElement}>
          <Text style={[styles.macroBoxElementText, styles.fatsText]}>Fats</Text>
          <TextInput
            style={styles.fatsValue}
            placeholder="-"
            placeholderTextColor="rgb(207, 232, 63)"
            keyboardType="numeric"
            value={fats && fats !== 0 ? String(fats) : ''}
            onChangeText={(fats: string) => handleMacroChange('fats', fats)}
          />
        </View>
        <View style={styles.macroBoxElement}>
          <Text style={[styles.macroBoxElementText, styles.carbsText]}>Carbs</Text>
          <TextInput
            style={styles.carbsValue}
            placeholder="-"
            placeholderTextColor="rgb(232, 159, 63)"
            inputMode="numeric"
            keyboardType="numeric"
            value={carbohydrates && carbohydrates !== 0 ? String(carbohydrates) : ''}
            onChangeText={(carbohydrates: string) => handleMacroChange('carbohydrates', carbohydrates)}
          />
        </View>
      </View>
    </View>
  )
}
