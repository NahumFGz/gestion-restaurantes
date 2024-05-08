import { useEffect } from 'react'

export function ModalBasic ({ title, children, show, onClose }) {
  // Función para manejar el clic fuera del contenido del modal
  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-backdrop') {
      onClose()
    }
  }

  // Función para manejar el evento de tecla
  const handleKeyDown = (e) => {
    // Chequea si la tecla presionada es Escape
    if (e.key === 'Escape') {
      onClose()
    }
  }

  // Efecto para añadir y remover el manejador de evento de tecla
  useEffect(() => {
    if (show) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [show, onClose]) // Dependencias para que el efecto se ejecute solo si cambian

  return (
    <div
      id='modal-backdrop'
      className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center 
      ${show ? 'block' : 'hidden'}`}
      onClick={handleOutsideClick}
    >
      <div className='bg-white w-1/3 p-4 rounded-md'>
        <div className='flex justify-between'>
          <h2 className='text-xl font-bold text-gray-800'>{title}</h2>
          <button
            className='text-red-500'
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
