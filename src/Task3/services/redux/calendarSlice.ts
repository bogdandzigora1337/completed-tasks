import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../redux/store/store'
import { ICalendarState, IDailyEvent } from '../../types/Task3Types'

const initialState: ICalendarState = {
  events: [],
  selectedDate: null,
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string | null>) => {
      state.selectedDate = action.payload
    },

    addEvent: (state, action: PayloadAction<{ date: string; event: IDailyEvent }>) => {
      const { date, event } = action.payload
      const existingDate = state.events.find((evn) => evn.date === date)

      if (existingDate) {
        existingDate.events.push(event)
      } else {
        state.events.push({ date, events: [event] })
      }
    },

    editEvent: (state, action: PayloadAction<{ date: string; event: IDailyEvent }>) => {
      const { date, event } = action.payload
      const events = state.events.find((evn) => evn.date === date)

      if (events) {
        const eventToEdit = events.events.find((evn) => evn.id === event.id)
        if (eventToEdit) {
          Object.assign(eventToEdit, event)
        }
      }
    },

    deleteEvent: (state, action: PayloadAction<{ date: string; eventId: string }>) => {
      const { date, eventId } = action.payload
      const events = state.events.find((evn) => evn.date === date)

      if (events) {
        events.events = events.events.filter((evn) => evn.id !== eventId)
      }
    },
  },
})

export const { setSelectedDate, addEvent, deleteEvent, editEvent } = calendarSlice.actions

export const selectCalendarEvents = (state: RootState) => state.calendar.events
export const selectSelectedDate = (state: RootState) => state.calendar.selectedDate

export default calendarSlice
