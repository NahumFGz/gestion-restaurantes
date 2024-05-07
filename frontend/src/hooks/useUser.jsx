import { getMeApi } from '../api/user'

export function useUser () {
  const getMe = async (token) => {
    try {
      const result = await getMeApi(token)
      return result
    } catch (error) {
      throw new Error('Error al obtener el usuario')
    }
  }

  return { getMe }
}
