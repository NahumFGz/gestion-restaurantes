import { useEffect, useState } from 'react'
import { AddEditProductForm, HeaderPage, Loading, ModalBasic, TableProducts } from '../../components'
import { useProducts } from '../../hooks'

export function ProducsAdmin () {
  const { products, loading, getProducts } = useProducts()
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)
  const [refetch, setRefetch] = useState(false)

  useEffect(() => { getProducts() }, [refetch])

  const openCloseModal = () => {
    if (showModal) {
      setTitleModal(null)
      setContentModal(null)
    }
    setShowModal((prev) => !prev)
  }
  const onRefetch = () => setRefetch((prev) => !prev)

  const addProduct = () => {
    setTitleModal('Nuevo producto')
    setContentModal(<AddEditProductForm onClose={openCloseModal} onRefetch={onRefetch} />)
    openCloseModal()
  }

  return (
    <>
      <HeaderPage title='Productos' btnTitle='Nuevo producto' btnClick={addProduct} />
      {loading
        ? <Loading />
        : <TableProducts products={products} />}

      <ModalBasic
        title={titleModal}
        show={showModal}
        onClose={openCloseModal}
      >
        {contentModal}
      </ModalBasic>
    </>
  )
}
