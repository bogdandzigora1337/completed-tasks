import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { servicesAPI } from '../../Task2/services/api/servicesApi'
import calendarSlice from '../../Task3/services/redux/calendarSlice'

const rootReducer = combineReducers({
  [servicesAPI.reducerPath]: servicesAPI.reducer,
  [calendarSlice.reducerPath]: calendarSlice.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(servicesAPI.middleware),
  })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
