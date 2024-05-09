import { useEffect, useState } from 'react'
import { AddEditCategoryForm, HeaderPage, Loading, ModalBasic, TableCategory } from '../../components'
import { useCategory } from '../../hooks'

export function CategoriesAdmin () {
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)
  const { loading, categories, getCategories } = useCategory()

  useEffect(() => { getCategories() }, [])

  const openCloseModal = () => {
    if (showModal) {
      setTitleModal(null)
      setContentModal(null)
    }
    setShowModal((prevState) => !prevState)
  }

  const addCategory = () => {
    setTitleModal('Nueva categoría')
    setContentModal(<AddEditCategoryForm />)
    openCloseModal()
  }

  return (
    <>
      <HeaderPage title='Categorías' btnTitle='Nueva categoría' btnClick={addCategory} />
      {
        loading
          ? (<Loading />)
          : <TableCategory categories={categories} />
      }

      <ModalBasic title={titleModal} show={showModal} onClose={openCloseModal}>
        {contentModal}
      </ModalBasic>
    </>
  )
}
