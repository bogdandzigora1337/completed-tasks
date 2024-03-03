import { FunctionComponent } from 'react'
import CardItem from '../CardItem/CardItem'
import { IFetchData } from '../../types/Task1Types'

import styles from './CardList.module.scss'

interface CardListProps {
  data: IFetchData[]
}

const CardList: FunctionComponent<CardListProps> = ({ data }) => {
  return (
    <ul className={styles['card-list']}>
      {data.map((card) => (
        <CardItem key={card.header} cardData={card} />
      ))}
    </ul>
  )
}

export default CardList
