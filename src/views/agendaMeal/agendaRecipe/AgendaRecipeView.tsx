import { View, Text } from 'react-native'
import { Recipe, Product } from '../../../types/Types'
import { useEffect, useState } from 'react'
import { ApiService } from '../../../services/api/ApiService'

type AgendaRecipeViewProps = {
  recipe: Recipe
}

export const AgendaRecipeView = ({ recipe }: AgendaRecipeViewProps) => {
  const [fats, setFats] = useState(0)
  const [carbs, setCarbs] = useState(0)
  const [proteins, setProteins] = useState(0)

  useEffect(() => {
    const fetchProduct = async (id: Product['id']) => {
      const response = await ApiService.getProduct(id)
      return response.data
    }

    const fetchProducts = async () => {
      const products = await Promise.all(recipe.products.map(productR => fetchProduct(productR.product_id)))

      let totalCarbs = 0
      let totalFats = 0
      let totalProteins = 0

      products.forEach((product, index) => {
        if (product) {
          const productR = recipe.products[index]
          const proportion = productR.amount_needed / 100
          totalCarbs += product.carbons * proportion
          totalFats += product.fat * proportion
          totalProteins += product.protein * proportion
        }
      })

      setCarbs(totalCarbs)
      setProteins(totalProteins)
      setFats(totalFats)
    }

    fetchProducts()
  }, [])

  return (
    <View>
      <Text>{recipe.name}</Text>
    </View>
  )
}
