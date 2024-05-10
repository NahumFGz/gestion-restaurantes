import { useEffect, useState } from 'react'
import { AddEditCategoryForm, HeaderPage, Loading, ModalBasic, TableCategory } from '../../components'
import { useCategory } from '../../hooks'

export function CategoriesAdmin () {
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)
  const { loading, categories, getCategories, deleteCategory } = useCategory()
  const [refetch, setRefetch] = useState(false)

  useEffect(() => { getCategories() }, [refetch])

  const onRefetch = () => setRefetch((prevState) => !prevState)

  const openCloseModal = () => {
    if (showModal) {
      setTitleModal(null)
      setContentModal(null)
    }
    setShowModal((prevState) => !prevState)
  }

  const addCategory = () => {
    setTitleModal('Nueva categoría')
    setContentModal(<AddEditCategoryForm onClose={openCloseModal} onRefetch={onRefetch} />)
    openCloseModal()
  }

  const updateCategory = (category) => {
    setTitleModal('Editar categoría')
    setContentModal(<AddEditCategoryForm category={category} onClose={openCloseModal} onRefetch={onRefetch} />)
    openCloseModal()
  }

  const deleteCategoryById = async (categoryId) => {
    try {
      await deleteCategory(categoryId)
      onRefetch()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <HeaderPage title='Categorías' btnTitle='Nueva categoría' btnClick={addCategory} />
      {
        loading
          ? (<Loading />)
          : <TableCategory categories={categories} updateCategory={updateCategory} deleteCategory={deleteCategoryById} />
      }

      <ModalBasic title={titleModal} show={showModal} onClose={openCloseModal}>
        {contentModal}
      </ModalBasic>
    </>
  )
}
