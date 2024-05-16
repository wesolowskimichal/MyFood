import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, View, Text } from 'react-native'
import { RootStackParamList } from '../../../types/Types'
import { BottomNav } from '../../bottomNav/BottomNav'
import { Page } from '../page/Page'

type AgendaPageProps = NativeStackScreenProps<RootStackParamList, 'Agenda'>
export const AgendaPage: React.FC<AgendaPageProps> = props => {
  return (
    <Page navigation={props.navigation}>
      <Text>Agenda</Text>
    </Page>
  )
}
