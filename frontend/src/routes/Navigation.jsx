import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

export function Navigation () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<p className='text-xl'>Hola Navigation</p>} />
      </Routes>
    </BrowserRouter>
  )
}
