import { FunctionComponent } from 'react'
import ErrorRetryComponent from './components/ErrorRetryComponent/ErrorRetryComponent'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import ServicesList from './components/ServicesList/ServicesList'
import { useFetchServicesQuery } from './services/api/servicesApi'

import styles from './Task2.module.scss'

const Task2: FunctionComponent = () => {
  const { data, isError, refetch } = useFetchServicesQuery('')

  const handleRetry = (): void => {
    refetch()
  }

  return (
    <div className={styles.task2}>
      {isError ? (
        <ErrorRetryComponent onRetry={handleRetry} />
      ) : data ? (
        <ServicesList props={data} />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  )
}

export default Task2
