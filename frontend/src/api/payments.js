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
