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

export async function addProductApi (data, token) {
  try {
    console.log('dataxxx: ', data)

    const formData = new FormData()
    formData.append('title', data.product)
    formData.append('price', data.price)
    formData.append('category', data.category)
    formData.append('active', data.is_active)
    formData.append('image', data.image)

    const url = `${API_KEY}/api/products/`
    const params = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    }

    const response = await fetch(url, params)
    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Error al agregar el producto')
  }
}

export async function updateProductApi (categoryId, data, token) {
  try {
    const formData = new FormData()
    formData.append('title', data.product)
    formData.append('price', data.price)
    formData.append('category', data.category)
    formData.append('active', data.is_active)
    if (data.image && typeof data.image !== 'string' && data.image !== null && data.image !== undefined) {
      formData.append('image', data.image)
    }

    const url = `${API_KEY}/api/products/${categoryId}/`
    const params = {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    }

    const response = await fetch(url, params)
    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Error al actualizar el producto')
  }
}
