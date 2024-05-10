import { useEffect, useState } from 'react'
import { AddEditProductForm, HeaderPage, Loading, ModalBasic, TableProducts } from '../../components'
import { useProducts } from '../../hooks'

export function ProducsAdmin () {
  const { products, loading, getProducts } = useProducts()
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)

  useEffect(() => { getProducts() }, [])

  const openCloseModal = () => { setShowModal((prev) => !prev) }

  const addProduct = () => {
    setTitleModal('Nuevo producto')
    setContentModal(<AddEditProductForm onClose={openCloseModal} />)
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
