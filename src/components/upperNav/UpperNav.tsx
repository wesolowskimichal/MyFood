import { TouchableOpacity, View } from 'react-native'
import { Image, Text } from 'react-native'
import { styles } from './UpperNav.style'
import { NavProps } from '../../types/Types'

export const UpperNav: React.FC<NavProps> = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Image source={require('../../../assets/settings-icon.png')} style={styles.settingsIcon} />
      </TouchableOpacity>
    </View>
  )
}
