import { createContext, useState, useEffect } from 'react'
import { setToken, getToken } from '../api/token'
import { useUser } from '../hooks'

// 1. Crear el contexto
export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null
})

// 2. Crear el provider
export function AuthProvider ({ children }) {
  const [auth, setAuth] = useState(undefined)
  const { getMe } = useUser()

  const login = async (token) => {
    setToken(token)
    const me = await getMe(token)
    setAuth({ token, me })
    console.log('Usuario ME', me)
  }

  useEffect(() => {
    const token = getToken()
    if (!token) {
      setAuth(null)
    } else {
      login(token)
    }
  }, [])

  const valueContext = {
    auth,
    login,
    logout: () => console.log('Cerrando sesión')
  }

  if (auth === undefined) return null

  return (
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  )
}
