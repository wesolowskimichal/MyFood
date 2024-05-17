import React, { useCallback, useEffect, useState } from 'react'
import { BackHandler, Image, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { Product, RenderChildProps, SettingsRenderName } from '../../../../../../types/Types'
import { ShoppingListProductView } from '../../../../../../views/shoppingListProduct/ShoppingListProductView'
import { RowMap, SwipeListView } from 'react-native-swipe-list-view'
import { styles } from './ConstantShoppingListProductsOption.style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import Loader from '../../../../../../views/loader/Loader'

export const ConstantShoppingListProductsOption = ({ setRender }: RenderChildProps<SettingsRenderName>) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [showAdd, setShowAdd] = useState(true)

  const loadProductFromApi = (): Product => {
    const generateRandomString = (length: number) => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let result = ''
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        result += characters[randomIndex]
      }
      return result
    }

    return {
      id: generateRandomString(Math.floor(1 + Math.random() * 10)),
      name: 'Product from api',
      barcode: '',
      amount: 200,
      unit: 'ml',
      picture: '',
      added_by: '',
      carbons: 20,
      fat: 20,
      protein: 20
    }
  }

  const handleProductChange = (updatedProduct: Product, index: number) => {
    setProducts(prevProducts => {
      const updatedProducts = [...prevProducts]
      updatedProducts[index] = updatedProduct
      return updatedProducts
    })
  }

  const addProduct = (product: Product) => {
    if (products.find(it => it.id === product.id)) {
      // TODO: zeskroluj i podswietl produkt
      ToastAndroid.show('This product is already in your shopping list', ToastAndroid.SHORT)
    } else {
      ToastAndroid.show('New constant product added to shopping list', ToastAndroid.SHORT)
      setProducts(prevProducts => [...prevProducts, product])
    }
  }

  const removeProduct = (index: number) => {
    setProducts(prevProducts => {
      if (index >= 0 && index < prevProducts.length) {
        return prevProducts.filter((_, i) => i !== index)
      }
      return prevProducts
    })
    setShowAdd(true)
  }

  const loadConstantShoppingListProductsCallBack = useCallback(async () => {
    try {
      const constantShoppingListProductsJson = await AsyncStorage.getItem('constantShoppingListProducts')
      setLoading(false)
      if (constantShoppingListProductsJson !== null) {
        const constantShoppingListProducts: Product[] = JSON.parse(constantShoppingListProductsJson)
        setProducts(constantShoppingListProducts)
      }
    } catch (error) {
      console.error(error)
    }
  }, [])

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        setRender('options')
        return true
      }
      BackHandler.addEventListener('hardwareBackPress', onBackPress)
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [])
  )

  useEffect(() => {
    loadConstantShoppingListProductsCallBack()
  }, [loadConstantShoppingListProductsCallBack])

  useEffect(() => {
    const saveProducts = async () => {
      await AsyncStorage.setItem('constantShoppingListProducts', JSON.stringify(products))
    }
    saveProducts()
  }, [products])

  return loading ? (
    <View style={styles.loaderWrapper}>
      <Loader />
    </View>
  ) : (
    <View style={styles.wrapper}>
      <SwipeListView
        data={products}
        keyExtractor={item => item.id}
        renderItem={data => (
          <View key={data.index} style={styles.itemWrapper}>
            <ShoppingListProductView
              oProduct={data.item}
              onChange={(updatedProduct: Product) => handleProductChange(updatedProduct, data.index)}
            />
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View key={data.index} style={styles.delWrapper}>
            <TouchableOpacity
              style={styles.delButton}
              onPress={() => {
                rowMap[data.item.id].closeRow()
                removeProduct(data.index)
              }}
            >
              <Image source={require('../../../../../../../assets/trash_icon.png')} style={styles.delButtonImg} />
            </TouchableOpacity>
          </View>
        )}
        rightOpenValue={-70}
        disableRightSwipe={true}
        swipeGestureEnded={() => setShowAdd(prev => !prev)}
      />
      {showAdd && (
        <TouchableOpacity style={styles.addProductButton} onPress={() => addProduct(loadProductFromApi())}>
          <Image source={require('../../../../../../../assets/add_icon.png')} style={styles.addProductButtonIcon} />
        </TouchableOpacity>
      )}
    </View>
  )
}
