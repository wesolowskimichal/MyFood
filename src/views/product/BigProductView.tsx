import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { Product, _LocalProduct } from '../../types/Types'
import { styles } from './BigProductView.style'
import { convertApiUrl } from '../../functions/Functions'
import SelectDropdown from 'react-native-select-dropdown'
import { useEffect, useState } from 'react'
import { NavigationProp } from '@react-navigation/native'

type BigProductViewProps = {
  localProduct: _LocalProduct
  navigation: NavigationProp<any>
}

export const BigProductView = ({ localProduct, navigation }: BigProductViewProps) => {
  const product = localProduct.product
  const [amount, setAmount] = useState('')
  const [unit, setUnit] = useState(product.unit)
  const [carbs, setCarbs] = useState(0)
  const [fats, setFats] = useState(0)
  const [proteins, setProteins] = useState(0)
  const [kcal, setKcal] = useState(0)
  const sizeProductKeysArray = product.unit === 'g' || product.unit === 'kg' ? ['g', 'kg'] : ['ml', 'l']
  const amountBig = product.unit === 'kg' || product.unit === 'l' ? product.amount : product.amount / 1000
  const amountSmall = product.unit === 'kg' || product.unit === 'l' ? product.amount * 1000 : product.amount

  useEffect(() => {
    setKcal(countKcal(proteins, carbs, fats))
  }, [fats, proteins, carbs])

  useEffect(() => {
    onAmountChange(amount)
  }, [unit])

  const countMacroval = (amount: number, macroType: 'f' | 'c' | 'p', big = false) => {
    const proportion = big ? amount / amountBig : amount / amountSmall
    switch (macroType) {
      case 'f':
        return product.fat * proportion
      case 'c':
        return product.carbons * proportion
      case 'p':
        return product.protein * proportion
    }
  }

  const countKcal = (proteins: number, carbs: number, fats: number) => {
    return (proteins + carbs) * 4 + fats * 9
  }

  const onAmountChange = (amount: string) => {
    setAmount(amount)
    const amountNumber = Number(amount)
    setProteins(countMacroval(amountNumber, 'p', unit === 'kg' || unit === 'l'))
    setCarbs(countMacroval(amountNumber, 'c', unit === 'kg' || unit === 'l'))
    setFats(countMacroval(amountNumber, 'f', unit === 'kg' || unit === 'l'))
  }

  const handleAddProduct = () => {
    const newLocalProduct: _LocalProduct = {
      product: {
        ...product,
        amount: Number(amount),
        unit: unit,
        carbons: carbs,
        fat: fats,
        protein: proteins
      },
      __local_index: localProduct.__local_index
    }
    navigation.navigate('Agenda', {
      product: JSON.stringify(newLocalProduct)
    })
  }

  return (
    <ScrollView style={styles.wrapper}>
      <Image source={{ uri: convertApiUrl(product.picture) }} style={styles.picture} />
      <View style={styles.nameWrapper}>
        <Text style={styles.name}>{product.name}</Text>
      </View>
      <View style={styles.amountContainer}>
        <View style={styles.amountWrapper}>
          <TextInput
            style={[styles.amount]}
            placeholder="Amount"
            placeholderTextColor="#76ABAE"
            keyboardType="numeric"
            value={amount}
            onChangeText={(amount: string) => onAmountChange(amount)}
          />
          <SelectDropdown
            data={sizeProductKeysArray}
            onSelect={item => setUnit(item)}
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
            defaultValueByIndex={sizeProductKeysArray.indexOf('g')}
            dropdownStyle={styles.sizeValDropdownMenu}
          />
        </View>
      </View>
      <View style={styles.info}>
        {/* Left */}
        <View style={styles.infoLeft}>
          {/* P: P_val  */}
          <View style={styles.infoLeftElement}>
            <Text style={styles.infoLeftElementType}>P: </Text>
            <Text style={styles.infoLeftElementValue}>{proteins}</Text>
          </View>
          <View style={styles.infoLeftElement}>
            <Text style={styles.infoLeftElementType}>C: </Text>
            <Text style={styles.infoLeftElementValue}>{carbs}</Text>
          </View>
          <View style={styles.infoLeftElement}>
            <Text style={styles.infoLeftElementType}>F: </Text>
            <Text style={styles.infoLeftElementValue}>{fats}</Text>
          </View>
        </View>
        {/* Right */}
        <View style={styles.infoRight}>
          <View style={styles.infoKcalWrapper}>
            <View style={styles.infoKcalBack}>
              <Text style={styles.infoKcalType}>kcal</Text>
              <Text style={styles.infoKcalValue} numberOfLines={1} ellipsizeMode="tail">
                {kcal}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.addWrapper}>
        <Pressable style={styles.addButton} onPress={() => handleAddProduct()}>
          <Text style={styles.addText}>ADD</Text>
        </Pressable>
      </View>
      <View style={styles.macroInfoTable}>
        <View style={styles.tableRow}>
          <Text style={styles.tableColumn}></Text>
          <Text style={styles.tableColumn}>100{sizeProductKeysArray[0]}</Text>
          <Text style={styles.tableColumn}>250{sizeProductKeysArray[0]}</Text>
          <Text style={[styles.tableColumn, { borderRightWidth: 0 }]}>1{sizeProductKeysArray[1]}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableColumn}>Proteins</Text>
          <Text style={styles.tableColumn}>{countMacroval(100, 'p').toFixed(2)}</Text>
          <Text style={styles.tableColumn}>{countMacroval(250, 'p').toFixed(2)}</Text>
          <Text style={[styles.tableColumn, { borderRightWidth: 0 }]}>{countMacroval(1, 'p', true).toFixed(2)}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableColumn}>Carbs</Text>
          <Text style={styles.tableColumn}>{countMacroval(100, 'c').toFixed(2)}</Text>
          <Text style={styles.tableColumn}>{countMacroval(250, 'c').toFixed(2)}</Text>
          <Text style={[styles.tableColumn, { borderRightWidth: 0 }]}>{countMacroval(1, 'c', true).toFixed(2)}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableColumn}>Fats</Text>
          <Text style={styles.tableColumn}>{countMacroval(100, 'f').toFixed(2)}</Text>
          <Text style={styles.tableColumn}>{countMacroval(250, 'f').toFixed(2)}</Text>
          <Text style={[styles.tableColumn, { borderRightWidth: 0 }]}>{countMacroval(1, 'f', true).toFixed(2)}</Text>
        </View>
        <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
          <Text style={styles.tableColumn}>kcal</Text>
          <Text style={styles.tableColumn}>
            {countKcal(countMacroval(100, 'p'), countMacroval(100, 'c'), countMacroval(100, 'f')).toFixed(2)}
          </Text>
          <Text style={styles.tableColumn}>
            {countKcal(countMacroval(250, 'p'), countMacroval(250, 'c'), countMacroval(250, 'f')).toFixed(2)}
          </Text>
          <Text style={[styles.tableColumn, { borderRightWidth: 0 }]}>
            {countKcal(countMacroval(1, 'p', true), countMacroval(1, 'c', true), countMacroval(1, 'f', true)).toFixed(
              2
            )}
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
