import { createContext } from 'react'

// 1. Crear el contexto
export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null
})

// 2. Crear el provider
export function AuthProvider ({ children }) {
  const valueContext = 'Hola desde el contexto'

  return (
    <AuthContext.Provider value={{ valueContext }}>
      {children}
    </AuthContext.Provider>
  )
}
