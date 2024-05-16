import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BottomNav } from '../../bottomNav/BottomNav'
import { NavigationProp } from '@react-navigation/native'
import { ScrollView, View } from 'react-native'
import { styles } from './Page.style'
import { UpperNav } from '../../upperNav/UpperNav'

type PageProps = {
  navigation: NavigationProp<any>
  children: React.ReactNode
}

export const Page: React.FC<PageProps> = (props: PageProps) => {
  const { navigation, children } = props
  return (
    <SafeAreaView style={styles.root}>
      <UpperNav navigation={navigation} />
      <ScrollView style={styles.rootChildren}>{children}</ScrollView>
      <BottomNav navigation={navigation} />
    </SafeAreaView>
  )
}
