import { View, Text } from 'react-native'
import { Product } from '../../../types/Types'
import { styles } from './AgendaProductView.style'
import { useState } from 'react'

type AgendaProductViewProps = {
  product: Product
}

export const AgendaProductView = ({ product }: AgendaProductViewProps) => {
  const [amount, setAmount] = useState('')
  const [unit, setUnit] = useState(product.unit)
  const [carbs, setCarbs] = useState(product.carbons)
  const [fats, setFats] = useState(product.fat)
  const [proteins, setProteins] = useState(product.protein)
  const [kcal, setKcal] = useState(0)
  const sizeProductKeysArray = product.unit === 'g' || product.unit === 'kg' ? ['g', 'kg'] : ['ml', 'l']
  const amountBig = product.unit === 'kg' || product.unit === 'l' ? product.amount : product.amount / 1000
  const amountSmall = product.unit === 'kg' || product.unit === 'l' ? product.amount * 1000 : product.amount

  return (
    <View style={styles.row}>
      <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
        {product.name}
      </Text>
      <View style={styles.productMacro}>
        <View style={styles.productMacroBox}>
          <Text style={styles.productMacroText}>{proteins.toFixed(1)}</Text>
          <Text style={styles.productMacroText}>{carbs.toFixed(1)}</Text>
          <Text style={styles.productMacroText}>{fats.toFixed(1)}</Text>
        </View>
      </View>
      <View></View>
    </View>
  )
}
