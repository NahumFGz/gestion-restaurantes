const API_KEY = import.meta.env.VITE_BASE_API_URL

export async function getCategoriesApi () {
  try {
    const url = `${API_KEY}/api/categories/`
    const params = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch(url, params)

    if (response.status !== 200) {
      throw new Error('Error al obtener las categorías')
    }

    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Error al obtener las categorías')
  }
}
