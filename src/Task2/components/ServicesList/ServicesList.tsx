import { FunctionComponent } from 'react'
import { IFetchServices } from '../../types/Task2Types'
import ServiceItem from '../ServiceItem/ServiceItem'

import styles from './ServicesList.module.scss'

interface ListServicesProps {
  props: IFetchServices[]
}

const ServicesList: FunctionComponent<ListServicesProps> = ({ props }) => {
  return (
    <ul className={styles['services-list']}>
      {props.map((el) => (
        <ServiceItem key={el.id} props={el} />
      ))}
    </ul>
  )
}

export default ServicesList
