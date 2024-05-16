import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, View, Text } from 'react-native'
import { RootStackParamList } from '../../../types/Types'
import { BottomNav } from '../../bottomNav/BottomNav'
import { Page } from '../page/Page'

type FridgePageProps = NativeStackScreenProps<RootStackParamList, 'Fridge'>
export const FridgePage: React.FC<FridgePageProps> = props => {
  return (
    <Page navigation={props.navigation}>
      <Text>Fridge</Text>
    </Page>
  )
}
