import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HOME_PATH } from './routes.client'
import { routes } from './routes'

export function Navigation () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={HOME_PATH} />} />
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
