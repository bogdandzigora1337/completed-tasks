import { FunctionComponent, useEffect, useState } from 'react'
import CardList from './components/CardList/CardList'
import { fetchData } from './services/api/task1Api'
import { IFetchData } from './types/Task1Types'

import styles from './Task1.module.scss'

const Task1: FunctionComponent = () => {
  const [data, setData] = useState<IFetchData[]>([])

  useEffect(() => {
    fetchData().then((response) => setData(response))
  }, [])

  return (
    <div className={styles.task1}>
      <CardList data={data} />
    </div>
  )
}

export default Task1
