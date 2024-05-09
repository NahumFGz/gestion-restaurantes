import { useState } from 'react'
import { getCategoriesApi, addCategoryApi } from '../api/category'
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

  return { loading, error, categories, getCategories, addCategory }
}
