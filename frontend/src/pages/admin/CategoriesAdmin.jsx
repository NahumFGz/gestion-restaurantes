import { useEffect } from 'react'
import { HeaderPage, Loading } from '../../components'
import { useCategory } from '../../hooks'

export function CategoriesAdmin () {
  const { loading, categories, getCategories } = useCategory()

  useEffect(() => { getCategories() }, [])
  console.log('categories:', categories)

  return (
    <>
      <HeaderPage title='Categorías' btnTitle='Nueva categoría' />
      {
        loading
          ? (<Loading />)
          : 'Categorías'
      }
    </>
  )
}
