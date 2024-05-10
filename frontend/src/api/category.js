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

export async function addCategoryApi (data, token) {
  try {
    const formData = new FormData()
    formData.append('image', data.image)
    formData.append('title', data.category)

    const url = `${API_KEY}/api/categories/`
    const params = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    }

    const response = await fetch(url, params)

    if (response.status !== 201) {
      throw new Error('Error al crear la categoría')
    }

    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Error al crear la categoría')
  }
}

export async function updateCategoryApi (categoryId, data, token) {
  try {
    const formData = new FormData()
    formData.append('title', data.category)

    if (data.image && typeof data.image !== 'string') {
      formData.append('image', data.image)
    }
    const url = `${API_KEY}/api/categories/${categoryId}/`
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
    throw new Error('Error al actualizar la categoría')
  }
}
