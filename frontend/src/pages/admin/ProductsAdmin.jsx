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

  const openCloseModal = () => { setShowModal((prev) => !prev) }
  const onRefetch = () => setRefetch((prev) => !prev)

  useEffect(() => {
    if (!showModal) {
      console.log('limpiando modal')
      setTitleModal(null)
      setContentModal(null)
    }
  }, [showModal])

  const addProduct = () => {
    setTitleModal('Nuevo producto')
    setContentModal(<AddEditProductForm onClose={openCloseModal} onRefetch={onRefetch} />)
    openCloseModal()
  }

  const updateProduct = (product) => {
    setTitleModal('Editar producto')
    setContentModal(<AddEditProductForm product={product} onClose={openCloseModal} onRefetch={onRefetch} />)
    openCloseModal()
  }

  return (
    <>
      <HeaderPage title='Productos' btnTitle='Nuevo producto' btnClick={addProduct} />
      {loading
        ? <Loading />
        : <TableProducts products={products} updateProduct={updateProduct} />}

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
