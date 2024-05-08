const API_KEY = import.meta.env.VITE_BASE_API_URL

export async function loginApi (formData) {
  try {
    const url = `${API_KEY}/api/auth/login/`
    console.log('url', url)
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }

    const response = await fetch(url, params)

    if (response.status !== 200) {
      throw new Error('Usuario o contraseña incorrecta')
    }

    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Error al iniciar sesión')
  }
}

export async function getMeApi (token) {
  try {
    const url = `${API_KEY}/api/auth/me/`
    const params = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    const response = await fetch(url, params)

    if (response.status !== 200) {
      throw new Error('Error al obtener el usuario')
    }

    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Error al obtener el usuario')
  }
}

export async function getUsersApi (token) {
  try {
    const url = `${API_KEY}/api/users/`
    const params = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    const response = await fetch(url, params)

    if (response.status !== 200) {
      throw new Error('Error al obtener los usuarios')
    }

    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Error al obtener los usuarios')
  }
}

export async function addUserApi (token, formData) {
  try {
    const url = `${API_KEY}/api/users/`
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    }

    const response = await fetch(url, params)

    if (response.status !== 201) {
      throw new Error('Error al crear el usuario')
    }

    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Error al crear el usuario')
  }
}
