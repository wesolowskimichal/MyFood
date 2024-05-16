import React, { useMemo, useState } from 'react'
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { styles } from './SettingsPage.style'
import { Account } from './account/Account'
import { Settings } from './settings/Settings'
import { RenderService } from '../../../services/render/RenderService'
import { RenderObject, RootStackParamList, SettingsPageRenderName } from '../../../types/Types'

type SettingsPageProps = NativeStackScreenProps<RootStackParamList, 'Settings'>

export const SettingsPage: React.FC<SettingsPageProps> = props => {
  const [animate, setAnimate] = useState(false)
  const [render, setRender] = useState<SettingsPageRenderName>('Account')
  const [renderObjects, setRenderObjects] = useState<RenderObject<SettingsPageRenderName>[]>([])

  useMemo(() => {
    const renderObjects: RenderObject<SettingsPageRenderName>[] = [
      { renderName: 'Account', renderNode: <Account /> },
      { renderName: 'Settings', renderNode: <Settings /> }
    ]
    setRenderObjects(renderObjects)
  }, [])

  const toggleRender = () => {
    setAnimate(true)

    setRender(prevRender => (prevRender === 'Account' ? 'Settings' : 'Account'))

    setTimeout(() => {
      setAnimate(false)
    }, 700)
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleRender} activeOpacity={1}>
          {animate ? (
            <Image
              style={styles.headerImage}
              source={
                render === 'Account'
                  ? require('../../../../assets/settings-animation-left.gif')
                  : require('../../../../assets/settings-animation-right.gif')
              }
            />
          ) : (
            <Image
              style={styles.headerImage}
              source={
                render === 'Account'
                  ? require('../../../../assets/settings-account.png')
                  : require('../../../../assets/settings-settings.png')
              }
            />
          )}
        </TouchableOpacity>
      </View>
      <RenderService renderObjects={renderObjects} currentRender={render} />
    </View>
  )
}
