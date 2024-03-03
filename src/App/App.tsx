import { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Routes } from 'react-router-dom'
import { setupStore } from '../redux/store/store'
import AppRoutes from '../routes/AppRoutes'

const store = setupStore()

const App: FunctionComponent = () => {
  return (
    <>
      <Routes>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </Routes>
    </>
  )
}

export default App
