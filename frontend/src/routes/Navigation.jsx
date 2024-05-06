import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './routes'

export function Navigation () {
  console.log('routes ---> ', routes)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        {
          routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <route.layout>
                    <route.component />
                  </route.layout>
                }
              />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  )
}
