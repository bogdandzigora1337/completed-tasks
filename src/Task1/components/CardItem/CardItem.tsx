import { FunctionComponent } from 'react'
import { IFetchData } from '../../types/Task1Types'

import styles from './CardItem.module.scss'

interface CardItemProps {
  cardData: IFetchData
}

const CardItem: FunctionComponent<CardItemProps> = ({ cardData }) => {
  return (
    <li className={styles.card}>
      <h2 className={styles.card__header}>{cardData.header}</h2>
      <ul className={styles.card__list}>
        {cardData.options.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <p>{cardData.text}</p>
    </li>
  )
}

export default CardItem
