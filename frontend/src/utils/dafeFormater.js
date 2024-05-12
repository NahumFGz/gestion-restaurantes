export function formatDateToUTCMinus5 (isoDate) {
  const date = new Date(isoDate)

  // Ajustar la fecha a la zona horaria UTC-5
  const utcMinus5Offset = -5 * 60 // UTC-5 en minutos
  const localTimeOffset = date.getTimezoneOffset() // Offset local en minutos
  const utcMinus5Time = new Date(date.getTime() + (utcMinus5Offset + localTimeOffset) * 60000)

  const year = utcMinus5Time.getFullYear()
  const month = String(utcMinus5Time.getMonth() + 1).padStart(2, '0') // Meses van de 0 a 11
  const day = String(utcMinus5Time.getDate()).padStart(2, '0')
  const hours = String(utcMinus5Time.getHours()).padStart(2, '0')
  const minutes = String(utcMinus5Time.getMinutes()).padStart(2, '0')
  const seconds = String(utcMinus5Time.getSeconds()).padStart(2, '0')

  // Formatear fecha y hora
  const formattedDate = `${day}/${month}/${year}`
  const formattedTime = `${hours}:${minutes}:${seconds} UTC-5`
  const formattedHourMinute = `${hours}:${minutes}`

  // Calcular la diferencia de tiempo entre la hora ingresada y la hora actual del sistema
  const now = new Date()
  const nowUTCMinus5 = new Date(now.getTime() + (utcMinus5Offset + now.getTimezoneOffset()) * 60000)
  const timeDifference = Math.abs(nowUTCMinus5 - utcMinus5Time)

  const diffSeconds = Math.floor(timeDifference / 1000)
  const diffMinutes = Math.floor(diffSeconds / 60)
  const diffHours = Math.floor(diffMinutes / 60)
  const diffDays = Math.floor(diffHours / 24)

  let formattedTimeDifference = ''
  if (diffDays > 0) {
    formattedTimeDifference = `hace ${diffDays} ${diffDays === 1 ? 'día' : 'días'}`
  } else if (diffHours > 0) {
    formattedTimeDifference = `hace ${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`
  } else if (diffMinutes > 0) {
    formattedTimeDifference = `hace ${diffMinutes} ${diffMinutes === 1 ? 'minuto' : 'minutos'}`
  } else {
    formattedTimeDifference = `hace ${diffSeconds} ${diffSeconds === 1 ? 'segundo' : 'segundos'}`
  }

  return {
    formattedDate,
    formattedTime,
    formattedDateTime: `${formattedDate}, ${formattedTime}`,
    formattedHourMinute,
    formattedTimeDifference
  }
}

// Ejemplo de uso
// const isoDate = '2024-05-12T02:31:28.114418Z'
// const formatted = formatDateToUTCMinus5(isoDate)

// console.log(formatted.formattedDate) // Ejemplo: "11/05/2024"
// console.log(formatted.formattedTime) // Ejemplo: "21:31:28 UTC-5"
// console.log(formatted.formattedDateTime) // Ejemplo: "11/05/2024, 21:31:28 UTC-5"
// console.log(formatted.formattedHourMinute) // Ejemplo: "21:31"
// console.log(formatted.formattedTimeDifference) // Ejemplo: "hace x minutos/horas/días"
