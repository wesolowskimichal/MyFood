import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Navigator } from './src/navigation/Navigator'
import { UserProvider } from './src/contexts/UserContext'

export default function App() {
  return (
    <UserProvider>
      <StatusBar style="auto" translucent backgroundColor="#31363F" />
      <Navigator />
    </UserProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
