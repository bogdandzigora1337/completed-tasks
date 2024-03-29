import { FunctionComponent } from 'react'
import { Badge } from 'antd'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { selectCalendarEvents } from '../../services/redux/calendarSlice'

import styles from './Calendar.module.scss'

interface CalendarCellProps {
  date: { format: (arg0: string) => string }
}

const CalendarCell: FunctionComponent<CalendarCellProps> = ({ date }) => {
  const events = useSelector(selectCalendarEvents)
  const eventList = events.find((event: { date: string }) => event.date === date.format('YYYY-MM-DD'))

  return (
    <ul className={styles['calendar-cell']}>
      {eventList?.events.map((event) => (
        <li key={uuidv4()}>
          <Badge status="success" text={event.title} />
        </li>
      ))}
    </ul>
  )
}

export default CalendarCell
