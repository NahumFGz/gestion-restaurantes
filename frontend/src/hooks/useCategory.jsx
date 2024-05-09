import { useState } from 'react'
import { getCategoriesApi } from '../api/category'

export function useCategory () {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [categories, setCategories] = useState([])

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

  return { loading, error, categories, getCategories }
}
