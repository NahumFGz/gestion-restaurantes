import { Link, useLocation } from 'react-router-dom'

export function SideMenu ({ children }) {
  const { pathname } = useLocation()

  return (
    <div>
      <MenuLeft pathname={pathname} />
      <div className='ml-[200px] flex-1 p-4'>
        {children}
      </div>
    </div>
  )
}

export function MenuLeft ({ children, pathname }) {
  return (
    <div className='flex'>
      <div className='fixed left-0 top-[40px] border border-solid min-h-screen w-[200px] bg-white shadow-lg'>
        <ul className='space-y-2'>
          <Link to='/admin'>
            <li
              className={`p-2 cursor-pointer ${pathname === '/admin' ? 'bg-gray-200' : ''}`}
            >Pedido
            </li>
          </Link>
          <Link to='/admin/tables'>
            <li
              className={`p-2 cursor-pointer ${pathname === '/admin/tables' ? 'bg-gray-200' : ''}`}
            >Mesas
            </li>
          </Link>
          <Link to='/admin/payments-history'>
            <li
              className={`p-2 cursor-pointer ${pathname === '/admin/payments-history' ? 'bg-gray-200' : ''}`}
            >Historial de pagos
            </li>
          </Link>
          <Link to='/admin/categories'>
            <li
              className={`p-2 cursor-pointer ${pathname === '/admin/categories' ? 'bg-gray-200' : ''}`}
            >Categorias
            </li>
          </Link>
          <Link to='/admin/products'>
            <li
              className={`p-2 cursor-pointer ${pathname === '/admin/products' ? 'bg-gray-200' : ''}`}
            >Productos
            </li>
          </Link>
          <Link to='/admin/users'>
            <li
              className={`p-2 cursor-pointer ${pathname === '/admin/users' ? 'bg-gray-200' : ''}`}
            >Usuarios
            </li>
          </Link>
        </ul>
      </div>

      <div className='ml-[200px] flex-1 p-4'>
        {children}
      </div>
    </div>
  )
}
