import React, { useEffect, useMemo, useState } from 'react'
import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './Settings.style'
import { RenderObject, SettingsRenderName } from '../../../../types/Types'
import { Options } from './options/Options'
import { RenderService } from '../../../../services/render/RenderService'
import { MealsConfigOption } from './options/mealsConfig/MealsConfigOption'
import { ConstantShoppingListProductsOption } from './options/constantShoppingListProducts/ConstantShoppingListProductsOption'

export const Settings = () => {
  const [render, setRender] = useState<SettingsRenderName>('options')
  const [renderObjects, setRenderObjects] = useState<RenderObject<SettingsRenderName>[]>([])

  useMemo(() => {
    const renderObjects: RenderObject<SettingsRenderName>[] = [
      { renderName: 'options', renderNode: <Options setRender={setRender} /> },
      { renderName: 'mealsConfigOption', renderNode: <MealsConfigOption setRender={setRender} /> },
      {
        renderName: 'constantShoppingListProductsOption',
        renderNode: <ConstantShoppingListProductsOption setRender={setRender} />
      }
    ]
    setRenderObjects(renderObjects)
  }, [])

  return (
    <>
      <RenderService renderObjects={renderObjects} currentRender={render} />
    </>
  )
}
