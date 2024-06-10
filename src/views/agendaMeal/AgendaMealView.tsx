import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import { AgendaMeal, Product } from '../../types/Types'
import { AgendaRecipeView } from './agendaRecipe/AgendaRecipeView'
import { useEffect, useState } from 'react'
import { AgendaProductView } from './agendaProduct/AgendaProductView'
import { styles } from './AgendaMealView.style'
import { NavigationProp } from '@react-navigation/native'

type AgendaMealViewProps = {
  agendaMeal: AgendaMeal
  navigation: NavigationProp<any>
  localIndex: number
}

export const AgendaMealView = ({ agendaMeal, navigation, localIndex }: AgendaMealViewProps) => {
  const [agendaMealCarbs, setAgendaMealCarbs] = useState(agendaMeal.macro.carbohydrates)
  const [agendaMealFats, setAgendaMealFats] = useState(agendaMeal.macro.fats)
  const [agendaMealProteins, setAgendaMealProteins] = useState(agendaMeal.macro.proteins)
  const [agendaMealKcal, setAgendaMealKcal] = useState(0)
  const [hidden, setHidden] = useState(true)

  const handleAddProduct = (product: Product) => {
    setAgendaMealCarbs(prev => prev + product.carbons)
    setAgendaMealFats(prev => prev + product.fat)
    setAgendaMealProteins(prev => prev + product.protein)
  }

  useEffect(() => {
    setAgendaMealCarbs(agendaMeal.macro.carbohydrates)
    setAgendaMealFats(agendaMeal.macro.fats)
    setAgendaMealProteins(agendaMeal.macro.proteins)
  }, [agendaMeal])

  useEffect(() => {
    const countKcal = () => {
      return (agendaMealCarbs + agendaMealProteins) * 4 + agendaMealFats * 9
    }
    setAgendaMealKcal(countKcal())
  }, [agendaMealCarbs, agendaMealFats, agendaMealProteins])

  return (
    <View style={[styles.wrapper, agendaMealKcal === 0 && { height: 40 }]}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerLeftNameText}>{agendaMeal.meal.name}</Text>
          {agendaMealKcal > 0 && (
            <View style={styles.headerLeftBottom}>
              <Text style={styles.headerLeftKcalText}>{agendaMealKcal.toFixed(0)} kcal</Text>
              <View style={styles.headerLeftBottomMacroElements}>
                <Text style={styles.headerLeftBottomMacroElement}>{agendaMealProteins.toFixed(1)}</Text>
                <Text style={styles.headerLeftBottomMacroElement}>{agendaMealCarbs.toFixed(1)}</Text>
                <Text style={styles.headerLeftBottomMacroElement}>{agendaMealFats.toFixed(1)}</Text>
              </View>
            </View>
          )}
        </View>
        <View style={styles.headerRight}>
          <Pressable
            style={styles.headerRightPressableAdd}
            onPress={() => navigation.navigate('AddProduct', { localIndex: localIndex })}
          >
            <Image
              source={require('../../../assets/add_icon.png')}
              style={[styles.headerRightPressableImage, agendaMealKcal === 0 && { alignSelf: 'flex-start' }]}
            ></Image>
          </Pressable>
          <Pressable>
            <Image
              source={require('../../../assets/more_icon.png')}
              style={[
                styles.headerRightPressableImage,
                { width: 20 },
                agendaMealKcal === 0 && { alignSelf: 'flex-start' }
              ]}
            ></Image>
          </Pressable>
        </View>
      </View>
      {agendaMeal.meal.macro && (
        <View>
          <Text>{agendaMeal.meal.macro.proteins.toFixed(1)}</Text>
          <Text>{agendaMeal.meal.macro.carbohydrates.toFixed(1)}</Text>
          <Text>{agendaMeal.meal.macro.fats.toFixed(1)}</Text>
        </View>
      )}
      <ScrollView>
        {agendaMeal.products &&
          agendaMeal.products.map((product, index) => <AgendaProductView key={index} product={product} />)}
        {agendaMeal.recipes && agendaMeal.recipes.map(recipe => <AgendaRecipeView recipe={recipe} />)}
      </ScrollView>
    </View>
  )
}
