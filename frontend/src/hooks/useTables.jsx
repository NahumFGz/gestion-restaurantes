import { useState } from 'react'
import { useAuth } from './useAuth'
import { addTableApi, getTablesApi } from '../api/tables'

export function useTables () {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [tables, setTables] = useState([])
  const { auth } = useAuth()

  const getTables = async () => {
    try {
      setLoading(true)
      const response = await getTablesApi(auth.token)
      setLoading(false)
      setTables(response)
    } catch (error) {
      setLoading(false)
      setError(error)
      throw new Error('Error al obtener las mesas')
    }
  }

  const addTable = async (formData) => {
    try {
      setLoading(true)
      await addTableApi(auth.token, formData)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
      throw new Error('Error al agregar la mesa')
    }
  }

  return { loading, error, tables, getTables, addTable }
}
