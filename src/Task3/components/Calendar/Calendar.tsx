import { FunctionComponent, useEffect, useState } from 'react'
import { Calendar as AntdCalendar } from 'antd'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/store/store'
import { setSelectedDate } from '../../services/redux/calendarSlice'
import CalendarCell from '../CalendarCell/CalendarCell'
import EventModal from '../EventModal/EventModal'

import styles from './Calendar.module.scss'

const Calendar: FunctionComponent = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const dispatch = useDispatch<AppDispatch>()

  const handleDateClick = (date: dayjs.Dayjs) => {
    dispatch(setSelectedDate(date.format('YYYY-MM-DD')))
    setModalVisible(true)
  }

  useEffect(() => {
    dispatch(setSelectedDate(null))
  }, [dispatch])

  return (
    <div className={styles['container-calendar']}>
      <AntdCalendar cellRender={(date) => <CalendarCell date={date} />} onSelect={handleDateClick} />
      <EventModal moduleVisible={modalVisible} setModalVisible={setModalVisible} />
    </div>
  )
}

export default Calendar
