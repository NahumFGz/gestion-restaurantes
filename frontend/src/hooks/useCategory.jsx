import { useState } from 'react'
import { getCategoriesApi, addCategoryApi, updateCategoryApi, deleteCategoryApi } from '../api/category'
import { useAuth } from './useAuth'

export function useCategory () {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [categories, setCategories] = useState([])
  const { auth } = useAuth()

  const getCategories = async () => {
    try {
      setLoading(true)
      const response = await getCategoriesApi()
      setLoading(false)
      setCategories(response)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  const addCategory = async (data) => {
    try {
      setLoading(true)
      console.log('data:', data)
      await addCategoryApi(data, auth.token)
      setLoading(false)
      // const response = await addCategoryApi(data, auth.token)
      // setCategories((prevState) => [...prevState, response])
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  const updateCategory = async (categoryId, data) => {
    try {
      console.log('Datax:', data)
      setLoading(true)
      await updateCategoryApi(categoryId, data, auth.token)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  const deleteCategory = async (categoryId) => {
    try {
      setLoading(true)
      await deleteCategoryApi(categoryId, auth.token)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  return { loading, error, categories, getCategories, addCategory, updateCategory, deleteCategory }
}
