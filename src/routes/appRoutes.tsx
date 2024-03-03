import { FunctionComponent } from 'react'
import { Routes, Route } from 'react-router-dom'
import Task1 from '../Task1/Task1'
import Task2 from '../Task2/Task2'
import Task3 from '../Task3/Task3'
import Header from '../Header/Header'
import ServiceItemDetails from '../Task2/components/ServiceItemDetails/ServiceItemDetails'

const AppRoutes: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<Task1 />} />
        <Route path={'/task1'} element={<Task1 />} />
        <Route path={'/services'} element={<Task2 />} />
        <Route path={'/services/:id/details'} element={<ServiceItemDetails />} />
        <Route path={'/calendar'} element={<Task3 />} />
      </Routes>
    </>
  )
}

export default AppRoutes
