import { useEffect } from 'react'
import { HeaderPage, Loading } from '../../components'
import { useProducts } from '../../hooks'

export function ProducsAdmin () {
  const { products, loading, getProducts } = useProducts()

  useEffect(() => { getProducts() }, [])
  console.log(products)

  return (
    <>
      <HeaderPage title='Productos' btnTitle='Nuevo producto' />
      {loading ? <Loading /> : <p>Products table</p>}
    </>
  )
}
