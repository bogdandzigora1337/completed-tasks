import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchServiceDetailsQuery } from '../../services/api/servicesApi'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import ErrorRetryComponent from '../ErrorRetryComponent/ErrorRetryComponent'

import styles from './ServiceItemDetails.module.scss'

const ServiceItemDetails: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isError, refetch } = useFetchServiceDetailsQuery(id || '')

  const handleRetry = (): void => {
    refetch()
  }

  return (
    <div className={styles['service-item-details']}>
      {isError ? (
        <ErrorRetryComponent onRetry={handleRetry} />
      ) : data ? (
        <>
          <h1>{data?.name}</h1>
          <p>Стоимость: {data?.price} руб.</p>
          <p>{data?.content}</p>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  )
}

export default ServiceItemDetails
