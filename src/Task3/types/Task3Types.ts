export interface IDailyEvent {
  id: string
  title: string
  startTime: string
  endTime: string
}

export interface ICalendarState {
  events: {
    date: string
    events: IDailyEvent[]
  }[]
  selectedDate: string | null
}
