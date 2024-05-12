import { useState } from 'react'
import { useAuth } from './useAuth'
import { addTableApi, deleteTableApi, getTablesApi, updateTableApi } from '../api/tables'

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

  const updateTable = async (formData, id) => {
    try {
      setLoading(true)
      await updateTableApi(auth.token, formData, id)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
      throw new Error('Error al actualizar la mesa')
    }
  }

  const deleteTable = async (id) => {
    try {
      setLoading(true)
      await deleteTableApi(auth.token, id)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error)
      throw new Error('Error al eliminar la mesa')
    }
  }

  return { loading, error, tables, getTables, addTable, updateTable, deleteTable }
}
