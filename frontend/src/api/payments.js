import { PAYMENT_STATUS } from '../utils/constants'

const API_KEY = import.meta.env.VITE_BASE_API_URL

export async function createPaymentApi (paymentData) {
  try {
    const url = `${API_KEY}/api/payments/`
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paymentData)
    }

    const response = await fetch(url, params)
    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Error al crear el pago')
  }
}

export async function getPaymentByTableApi (idTable, token) {
  try {
    const tableFilter = `table=${idTable}`
    const statusFilter = `status_payment=${PAYMENT_STATUS.PENDING}`

    const url = `${API_KEY}/api/payments/?${tableFilter}&${statusFilter}`
    console.log('URL:', url)
    const params = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`
      }
    }
    const response = await fetch(url, params)
    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Error al obtener los pagos')
  }
}

export async function closePaymentApi (idPayment) {
  try {
    const url = `${API_KEY}/api/payments/${idPayment}/`
    const paramas = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status_payment: PAYMENT_STATUS.PAID
      })
    }

    const response = await fetch(url, paramas)
    const result = await response.json()
    return result
  } catch (error) {
    throw new Error('Error al cerrar el pago')
  }
}
