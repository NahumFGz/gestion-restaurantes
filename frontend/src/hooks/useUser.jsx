import { useState } from 'react'
import { getMeApi, getUsersApi } from '../api/user'
import { useAuth } from './useAuth'

export function useUser () {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [users, setUsers] = useState([])
  const { auth } = useAuth()

  const getMe = async (token) => {
    try {
      const result = await getMeApi(token)
      return result
    } catch (error) {
      throw new Error('Error al obtener el usuario')
    }
  }

  const getUsers = async () => {
    try {
      setLoading(true)
      const result = await getUsersApi(auth.token)
      setLoading(false)
      setUsers(result)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  return { getMe, getUsers, loading, error, users }
}
