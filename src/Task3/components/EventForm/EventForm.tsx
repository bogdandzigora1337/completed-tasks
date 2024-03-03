import { FunctionComponent, useEffect } from 'react'
import { Button, Form, FormInstance, Input, TimePicker } from 'antd'
import dayjs from 'dayjs'
import { IDailyEvent } from '../../types/Task3Types'

interface EventFormProps {
  form: FormInstance<unknown>
  onSubmit: () => void
  onCancel: () => void
  initialData: IDailyEvent | null
}

const EventForm: FunctionComponent<EventFormProps> = ({ form, onSubmit, onCancel, initialData }) => {
  useEffect(() => {
    if (initialData) {
      form.setFieldsValue({
        title: initialData.title,
        startTime: dayjs(initialData.startTime, 'HH:mm'),
        endTime: dayjs(initialData.endTime, 'HH:mm'),
      })
    }
  }, [initialData, form])

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        style={{ marginBottom: 0 }}
        name="title"
        label="Название задачи"
        rules={[{ required: true, message: 'Введите название задачи' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        style={{ marginBottom: 0 }}
        name="startTime"
        label="Время начала"
        rules={[{ required: true, message: 'Введите время начала' }]}
      >
        <TimePicker format="HH:mm" />
      </Form.Item>

      <Form.Item
        name="endTime"
        label="Время окончания"
        rules={[{ required: true, message: 'Введите время окончания' }]}
      >
        <TimePicker format="HH:mm" />
      </Form.Item>

      <Button type="primary" onClick={onSubmit} style={{ marginRight: '10px' }}>
        {initialData ? 'Обновить задачу' : 'Добавить задачу'}
      </Button>

      <Button onClick={onCancel}>Отмена</Button>
    </Form>
  )
}

export default EventForm
