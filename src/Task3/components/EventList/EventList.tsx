import { FunctionComponent } from 'react'
import { Button } from 'antd'
import { IDailyEvent } from '../../types/Task3Types'

import styles from './EventList.module.scss'

interface EventListProps {
  events: IDailyEvent[]
  onDeleteEvent: (id: string) => void
  onEditEvent: (eventId: string) => void
}

const EventList: FunctionComponent<EventListProps> = ({ events, onDeleteEvent, onEditEvent }) => (
  <ul className={styles['event-list']}>
    {events.map((event) => (
      <li key={event.id} className={styles['event-item']}>
        <div className={styles['event-details']}>
          <h3>{event.title}</h3>
          <p>
            {event.startTime} ч. до {event.endTime} ч.
          </p>
        </div>
        <div className={styles['events-actions']}>
          <Button type="link" onClick={() => onEditEvent(event.id)}>
            Редактировать
          </Button>
          |
          <Button type="link" danger onClick={() => onDeleteEvent(event.id)}>
            Удалить
          </Button>
        </div>
      </li>
    ))}
  </ul>
)

export default EventList
