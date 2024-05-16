import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import { RootStackParamList } from '../../../types/Types'
import { Page } from '../page/Page'

type MealsPageProps = NativeStackScreenProps<RootStackParamList, 'Meals'>
export const MealsPage: React.FC<MealsPageProps> = props => {
  return (
    <Page navigation={props.navigation}>
      <Text>Meals</Text>
    </Page>
  )
}
