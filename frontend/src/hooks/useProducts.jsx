import { useState } from 'react'
import { getProductsApi } from '../api/products'

export function useProducts () {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      setLoading(true)
      const response = await getProductsApi()
      setLoading(false)
      setProducts(response)
    } catch (error) {
      setError(error)
      throw new Error('Error al obtener los productos')
    }
  }

  return { loading, error, products, getProducts }
}
