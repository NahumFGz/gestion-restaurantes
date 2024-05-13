const API_KEY = import.meta.env.VITE_BASE_API_URL

export async function getTablesApi (token) {
  try {
    const url = `${API_KEY}/api/tables/`
    const params = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const response = await fetch(url, params)
    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Error al obtener las mesas')
  }
}

export async function addTableApi (token, formData) {
  try {
    const url = `${API_KEY}/api/tables/`
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    }
    const response = await fetch(url, params)
    const result = await response.json()
    return result
  } catch {
    throw new Error('Error al agregar la mesa')
  }
}

export async function updateTableApi (token, formData, id) {
  try {
    const url = `${API_KEY}/api/tables/${id}/`
    const params = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    }
    const response = await fetch(url, params)
    const result = await response.json()
    return result
  } catch {
    throw new Error('Error al actualizar la mesa')
  }
}

export async function deleteTableApi (token, id) {
  try {
    const url = `${API_KEY}/api/tables/${id}/`
    const params = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const response = await fetch(url, params)

    if (response.status !== 204) {
      throw new Error('Error al eliminar la mesa')
    }
  } catch {
    throw new Error('Error al eliminar la mesa')
  }
}

export async function getTableApi (token, id) {
  try {
    const url = `${API_KEY}/api/tables/${id}/`
    const params = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const response = await fetch(url, params)
    const result = await response.json()
    return result
  } catch {
    throw new Error('Error al obtener la mesa')
  }
}
