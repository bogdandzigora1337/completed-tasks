import { FunctionComponent } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

const Header: FunctionComponent = () => {
  return (
    <header>
      <nav className={styles.header}>
        <Link to="/task1">
          <Button type="link">Task 1</Button>
        </Link>

        <Link to="/services">
          <Button type="link">Task 2</Button>
        </Link>

        <Link to="/calendar">
          <Button type="link">Task 3</Button>
        </Link>
      </nav>
    </header>
  )
}

export default Header
