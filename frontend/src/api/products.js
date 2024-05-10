const API_KEY = import.meta.env.VITE_BASE_API_URL

export async function getProductsApi () {
  try {
    const url = `${API_KEY}/api/products/`
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Error al obtener los productos')
  }
}
