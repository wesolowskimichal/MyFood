import React, { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { Product, SizeProduct } from '../../types/Types'
import { styles } from './ShoppingListProductView.style'
import SelectDropdown from 'react-native-select-dropdown'

type ShoppingListProductViewProps = {
  oProduct: Product | undefined
  onChange: any
}

export const ShoppingListProductView = ({ oProduct, onChange }: ShoppingListProductViewProps) => {
  const [product, setProduct] = useState<Product | null>(null)
  const sizeProductKeysArray = ['ml', 'l', 'g', 'kg']

  useEffect(() => {
    setProduct(oProduct ?? null)
  }, [oProduct])

  const handleQuantityChange = (amount: string) => {
    if (product === null) return
    const updatedProduct: Product = {
      ...product!,
      amount: Number(amount)
    }
    onChange(updatedProduct)
  }

  const handleSizeTypeChange = (unit: Product['unit']) => {
    if (product === null) return
    const updatedProduct: Product = {
      ...product!,
      unit: unit
    }
    onChange(updatedProduct)
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.vertWrapper}>
        <View style={styles.nameWrapper}>
          <Text style={styles.nameVal}>{product?.name}</Text>
        </View>
        <View style={styles.sizeWrapper}>
          <TextInput
            style={styles.sizeValAmount}
            keyboardType="numeric"
            value={String(product?.amount)}
            onChangeText={(quantity: string) => handleQuantityChange(quantity)}
          />
          <SelectDropdown
            data={sizeProductKeysArray}
            onSelect={(item, index) => {
              handleSizeTypeChange(item)
            }}
            renderButton={(selectedSizeType, isOpened) => {
              return (
                <View style={styles.sizeValTypeButton}>
                  <Text style={styles.sizeValTypeText}>{(selectedSizeType && selectedSizeType) || 'select'}</Text>
                </View>
              )
            }}
            renderItem={(sizeType, index, isSelected) => {
              return (
                <View>
                  <Text
                    style={{ ...styles.sizeValDropdownMenuItem, ...(isSelected && { backgroundColor: '#5b878a' }) }}
                  >
                    {sizeType}
                  </Text>
                </View>
              )
            }}
            defaultValueByIndex={sizeProductKeysArray.indexOf(product ? product.unit : 'g')}
            dropdownStyle={styles.sizeValDropdownMenu}
          />
        </View>
      </View>
    </View>
  )
}
