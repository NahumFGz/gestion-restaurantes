import { useState } from 'react'
import { addProductApi, getProductsApi, updateProductApi, deleteProductApi } from '../api/products'
import { useAuth } from './useAuth'

export function useProducts () {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [products, setProducts] = useState([])
  const { auth } = useAuth()

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

  const addProduct = async (data) => {
    try {
      setLoading(true)
      await addProductApi(data, auth.token)
      setLoading(false)
    } catch (error) {
      setError(error)
      throw new Error('Error al agregar el producto')
    }
  }

  const updateProduct = async (categoryId, data) => {
    try {
      setLoading(true)
      await updateProductApi(categoryId, data, auth.token)
      setLoading(false)
    } catch (error) {
      setError(error)
      throw new Error('Error al actualizar el producto')
    }
  }

  const deleteProduct = async (categoryId) => {
    try {
      setLoading(true)
      await deleteProductApi(categoryId, auth.token)
      setLoading(false)
    } catch (error) {
      setError(error)
      throw new Error('Error al eliminar el producto')
    }
  }

  return { loading, error, products, getProducts, addProduct, updateProduct, deleteProduct }
}
