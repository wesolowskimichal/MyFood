import { useEffect, useState } from 'react'
import { FoodMacroElements, Product } from '../../types/Types'
import { View, Text, TextInput, ToastAndroid, Image, Pressable } from 'react-native'
import { styles } from './AddProductView.style'
import SelectDropdown from 'react-native-select-dropdown'
import { ApiService } from '../../services/api/ApiService'
import { ResponseCode } from '../../services/api/ResponseCode'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'

type AddProductViewProps = {
  barcode: string
}

export const AddProductView = ({ barcode }: AddProductViewProps) => {
  const [name, setName] = useState<Product['name']>('')
  const [amount, setAmount] = useState<Product['amount']>(0)
  const [unit, setUnit] = useState<Product['unit']>('g')
  const [picture, setPicture] = useState<Product['picture'] | null>(null)
  const [carbs, setCarbs] = useState('0')
  const [fats, setFats] = useState('0')
  const [proteins, setProteins] = useState('0')

  const sizeProductKeysArray = ['ml', 'l', 'g', 'kg']

  const handleMacroChange = (fieldName: keyof FoodMacroElements, value: string) => {
    if (fieldName === 'carbohydrates') setCarbs(value)
    if (fieldName === 'fats') setFats(value)
    if (fieldName === 'proteins') setProteins(value)
  }

  const onSubmit = () => {
    const postProduct = async () => {
      const product: Product = {
        id: 'null',
        barcode: barcode,
        name: name,
        amount: amount,
        unit: unit,
        picture: picture ?? '',
        added_by: 'null',
        carbons: Number(carbs),
        fat: Number(fats),
        protein: Number(proteins)
      }
      console.log(product)

      const response = await ApiService.postProduct(product)
      if (response.responseCode === ResponseCode.POSITIVE) {
        ToastAndroid.show('Product saved', ToastAndroid.SHORT)
      }
    }

    postProduct()
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [225, 225],
      quality: 1
    })

    console.log(result)

    if (!result.canceled) {
      setPicture(result.assets[0].uri)
      const p = result.assets[0]
      console.log(p.uri.split('.').slice(-1)[0])
    }
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.inputNameField}
        placeholder="Name"
        placeholderTextColor="#76ABAE"
        onChangeText={name => setName(name)}
        value={name}
      />
      <View style={styles.settings}>
        <View style={styles.macroBox}>
          <Text style={styles.amountText}>Amount: </Text>
          <TextInput
            style={[styles.inputMacorField, styles.inputAmountField]}
            placeholder="Amount"
            placeholderTextColor="#76ABAE"
            keyboardType="numeric"
            value={amount && amount !== 0 ? String(amount) : ''}
            onChangeText={(amount: string) => setAmount(Number(amount))}
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
        <View style={styles.macroArea}>
          <View style={styles.macroBox}>
            <Text style={styles.macroTypeText}>P: </Text>
            <TextInput
              style={styles.inputMacorField}
              placeholder="Proteins"
              placeholderTextColor="#76ABAE"
              keyboardType="numeric"
              value={proteins}
              onChangeText={(proteins: string) => handleMacroChange('proteins', proteins)}
            />
          </View>
          <View style={styles.macroBox}>
            <Text style={styles.macroTypeText}>C: </Text>
            <TextInput
              style={styles.inputMacorField}
              placeholder="Carbs"
              placeholderTextColor="#76ABAE"
              keyboardType="numeric"
              value={carbs}
              onChangeText={(carbs: string) => handleMacroChange('carbohydrates', carbs)}
            />
          </View>
          <View style={styles.macroBox}>
            <Text style={styles.macroTypeText}>F: </Text>
            <TextInput
              style={styles.inputMacorField}
              placeholder="Fats"
              placeholderTextColor="#76ABAE"
              keyboardType="decimal-pad"
              value={fats}
              onChangeText={(fats: string) => handleMacroChange('fats', fats)}
            />
          </View>
        </View>
      </View>
      <View style={styles.imageWrapper}>
        {picture && <Image style={styles.imageWrapperImage} source={{ uri: picture }} />}
        <Pressable onPress={pickImage} style={styles.pickPressable}>
          <Text style={styles.pickPressableText}>Pick image</Text>
        </Pressable>
      </View>
      <Pressable style={styles.savePressable} onPress={() => onSubmit()}>
        <Image source={require('../../../assets/saveIcon.png')} style={styles.saveIcon} />
      </Pressable>
    </View>
  )
}
