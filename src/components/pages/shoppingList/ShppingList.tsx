import React from 'react'
import { Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types/Types'
import { Page } from '../page/Page'

type ShoppingListPageProps = NativeStackScreenProps<RootStackParamList, 'ShoppingList'>

export const ShoppingListPage: React.FC<ShoppingListPageProps> = props => {
  return (
    <Page navigation={props.navigation}>
      <Text>ShoppingList</Text>
    </Page>
  )
}
