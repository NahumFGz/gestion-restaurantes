export function SideMenu ({ children }) {
  return (
    <div>
      <MenuLeft />
      <div className='ml-[200px] flex-1 p-4'>
        {children}
      </div>
    </div>
  )
}

export function MenuLeft ({ children }) {
  return (
    <div className='flex'>
      <div className='fixed left-0 top-[40px] border border-solid min-h-screen w-[200px] bg-white shadow-lg'>
        <ul className='space-y-2 p-4'>
          <li>Carrito</li>
          <li>Productos</li>
          <li>Usuarios</li>
          <li>Ordenes</li>
          <li>Reportes</li>
        </ul>
      </div>

      <div className='ml-[200px] flex-1 p-4'>
        {children}
      </div>
    </div>
  )
}
