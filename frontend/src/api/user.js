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
