import { FunctionComponent, useEffect, useState } from 'react'
import { Button, Form, Modal, message, notification } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { AppDispatch } from '../../../redux/store/store'
import {
  addEvent,
  deleteEvent,
  editEvent,
  selectCalendarEvents,
  selectSelectedDate,
  setSelectedDate,
} from '../../services/redux/calendarSlice'
import { IDailyEvent } from '../../types/Task3Types'
import EventForm from '../EventForm/EventForm'
import EventList from '../EventList/EventList'

interface EventModalProps {
  moduleVisible: boolean
  setModalVisible: (value: React.SetStateAction<boolean>) => void
}

const EventModal: FunctionComponent<EventModalProps> = ({ moduleVisible, setModalVisible }) => {
  const [formVisible, setFormVisible] = useState<boolean>(false)
  const [editingEvent, setEditingEvent] = useState<IDailyEvent | null>(null)

  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector(selectSelectedDate)
  const events = useSelector(selectCalendarEvents)

  const selectedEvents = events.find((event) => event.date === selectedDate)
  const [form] = Form.useForm()

  const formattedDate = dayjs(selectedDate).locale('ru').format('D MMMM')

  const handleModalClose = () => {
    setModalVisible(false)
    setFormVisible(false)
    setEditingEvent(null)
  }

  const handleAddEvent = () => {
    form.resetFields()
    setFormVisible(true)
    setEditingEvent(null)
  }

  const handleEditEvent = (eventId: string) => {
    const eventToEdit = selectedEvents?.events.find((event) => event.id === eventId)
    if (eventToEdit) {
      setFormVisible(true)
      setEditingEvent(eventToEdit)
    }
  }

  const handleFormCancel = () => {
    setFormVisible(false)
    setEditingEvent(null)
  }

  const handleFormSubmit = () => {
    form.validateFields().then((values) => {
      const newEvent = {
        id: editingEvent?.id || uuidv4(),
        title: values.title,
        startTime: values.startTime.format('HH:mm'),
        endTime: values.endTime.format('HH:mm'),
      }

      const action = editingEvent
        ? editEvent({ date: selectedDate || '', event: newEvent })
        : addEvent({ date: selectedDate || '', event: newEvent })

      dispatch(action)

      form.resetFields()
      setModalVisible(false)
      setFormVisible(false)
      setEditingEvent(null)

      message.success(`Событие успешно ${editingEvent ? 'обновлено' : 'добавлено'}`)

      const notificationTime = dayjs(values.startTime).subtract(10, 'minutes')

      if (notificationTime.isAfter(dayjs())) {
        const timeoutId = setTimeout(() => {
          notification.info({
            message: 'Напоминание',
            description: `Через 10 минут начнется событие: ${values.title}`,
            duration: null,
          })
        }, notificationTime.diff(dayjs()))

        return () => clearTimeout(timeoutId)
      }
    })
  }

  const handleDeleteEvent = (eventId: string) => {
    dispatch(deleteEvent({ date: selectedDate || '', eventId }))
  }

  useEffect(() => {
    dispatch(setSelectedDate(null))
  }, [dispatch])

  return (
    <Modal
      title={`Мероприятия на ${formattedDate || ''}`}
      open={moduleVisible}
      onCancel={handleModalClose}
      footer={[
        <Button key="add" type="primary" onClick={handleAddEvent}>
          + Новая задача
        </Button>,
      ]}
    >
      {formVisible && (
        <EventForm form={form} onSubmit={handleFormSubmit} onCancel={handleFormCancel} initialData={editingEvent} />
      )}

      {!editingEvent && selectedEvents?.events && (
        <EventList events={selectedEvents.events} onDeleteEvent={handleDeleteEvent} onEditEvent={handleEditEvent} />
      )}
    </Modal>
  )
}

export default EventModal
