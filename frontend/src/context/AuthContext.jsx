import { createContext, useState } from 'react'
import { setToken } from '../api/token'
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

  const valueContext = {
    auth,
    login,
    logout: () => console.log('Cerrando sesión')
  }

  return (
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  )
}
