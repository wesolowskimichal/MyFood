import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../Settings.style'
import { RenderChildProps, SettingsRenderName } from '../../../../../types/Types'

export const Options = ({ setRender }: RenderChildProps<SettingsRenderName>) => {
  return (
    <ScrollView style={styles.wrapper}>
      <TouchableOpacity style={styles.option} onPress={() => setRender('mealsConfigOption')}>
        <Text style={styles.optionText}>Meals Configuration</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => setRender('constantShoppingListProductsOption')}>
        <Text style={styles.optionText}>Constant Shopping List Products</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
