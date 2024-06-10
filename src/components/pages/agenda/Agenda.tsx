import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, Pressable, ScrollView } from 'react-native'
import { AgendaDay, Product, RootStackParamList, _LocalProduct } from '../../../types/Types'
import { Page } from '../page/Page'
import { useCallback, useEffect, useRef, useState } from 'react'
import { LocalData } from '../../../services/localStorage/LocalData'
import { LocalResponseCode } from '../../../services/localStorage/LocalResponseCode'
import { AgendaMealView } from '../../../views/agendaMeal/AgendaMealView'
import { styles } from './Agenda.style'

type AgendaPageProps = NativeStackScreenProps<RootStackParamList, 'Agenda'>
export const AgendaPage: React.FC<AgendaPageProps> = props => {
  const [agendaDays, setAgendaDays] = useState<(AgendaDay | null)[]>([])
  const [currentDay, setCurentDay] = useState<AgendaDay['day']>(0)
  const scrollViewRef = useRef<ScrollView>(null)

  useEffect(() => {
    if (scrollViewRef && scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: false })
    }
  }, [scrollViewRef])

  useEffect(() => {
    if (props.route.params) {
      /**
       * It is added during navigation
       *
       * @ts-expect-error */
      const product: _LocalProduct = JSON.parse(props.route.params.product)
      handleAddProduct(product.__local_index, product.product)
    }
  }, [props.route.params])

  const handleAddProduct = (index: number, product: Product) => {
    setAgendaDays(currentDays => {
      const newDays = currentDays.map((day, idx) =>
        day
          ? idx === currentDay
            ? {
                ...day,
                agendaMeals: day.agendaMeals.map((meal, mealIdx) =>
                  mealIdx === index
                    ? {
                        ...meal,
                        products: meal.products ? [...meal.products, product] : [product],
                        macro: {
                          proteins: meal.macro.proteins + product.protein,
                          fats: meal.macro.fats + product.fat,
                          carbohydrates: meal.macro.carbohydrates + product.carbons
                        }
                      }
                    : meal
                )
              }
            : day
          : null
      )
      LocalData.setAgendaDays(newDays)
      return newDays
    })
  }

  const loadAgendaDaysCallback = useCallback(async () => {
    const agendaDaysResponse = await LocalData.getAgendaDays()
    console.log(agendaDaysResponse)

    if (agendaDaysResponse.responseCode === LocalResponseCode.POSITIVE) {
      setAgendaDays(agendaDaysResponse.data!)
    }
  }, [])

  useEffect(() => {
    loadAgendaDaysCallback()
  }, [loadAgendaDaysCallback])

  const createDate = (day: number) => {
    const date = new Date(new Date().getTime() - day * 24 * 60 * 60 * 1000)
    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}`
  }

  return (
    <Page navigation={props.navigation}>
      <ScrollView horizontal style={styles.days} ref={scrollViewRef}>
        <Pressable style={styles.pressableDay} onPress={() => setCurentDay(6)}>
          <Text style={styles.pressableDayText}>{createDate(6)}</Text>
        </Pressable>
        <Pressable style={styles.pressableDay} onPress={() => setCurentDay(5)}>
          <Text style={styles.pressableDayText}>{createDate(5)}</Text>
        </Pressable>
        <Pressable style={styles.pressableDay} onPress={() => setCurentDay(4)}>
          <Text style={styles.pressableDayText}>{createDate(4)}</Text>
        </Pressable>
        <Pressable style={styles.pressableDay} onPress={() => setCurentDay(3)}>
          <Text style={styles.pressableDayText}>{createDate(3)}</Text>
        </Pressable>
        <Pressable style={styles.pressableDay} onPress={() => setCurentDay(2)}>
          <Text style={styles.pressableDayText}>{createDate(2)}</Text>
        </Pressable>
        <Pressable style={styles.pressableDay} onPress={() => setCurentDay(1)}>
          <Text style={styles.pressableDayText}>{createDate(1)}</Text>
        </Pressable>
        <Pressable style={styles.pressableDay} onPress={() => setCurentDay(0)}>
          <Text style={styles.pressableDayText}>{createDate(0)}</Text>
        </Pressable>
      </ScrollView>
      <ScrollView>
        {agendaDays[currentDay] &&
          agendaDays[currentDay]?.agendaMeals.map((agendaMeal, index) => (
            <AgendaMealView key={index} agendaMeal={agendaMeal} navigation={props.navigation} localIndex={index} />
          ))}
      </ScrollView>
    </Page>
  )
}
