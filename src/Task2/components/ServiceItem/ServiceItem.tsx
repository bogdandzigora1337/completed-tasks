import { FunctionComponent } from 'react'
import { IFetchServices } from '../../types/Task2Types'
import { Link } from 'react-router-dom'

import styles from './ServiceItem.module.scss'

interface ServiceElementProps {
  props: IFetchServices
}

const ServiceItem: FunctionComponent<ServiceElementProps> = ({ props }) => {
  return (
    <li className={styles['service-item']}>
      <Link to={`/services/${props.id}/details`}>{props.name}</Link>
      <p>{props.price} руб.</p>
    </li>
  )
}

export default ServiceItem
