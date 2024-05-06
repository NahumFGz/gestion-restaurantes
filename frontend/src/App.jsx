import { Navigation } from './routes'
import { ToastContainer } from 'react-toastify'

function App () {
  return (
    <div>
      <Navigation />
      <ToastContainer
        position='bottom-center'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  )
}

export default App
