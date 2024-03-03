import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IFetchServices } from '../../types/Task2Types'

export const servicesAPI = createApi({
  reducerPath: 'servicesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://server-express-theta.vercel.app' }),
  endpoints: (builder) => ({
    fetchServices: builder.query<IFetchServices[], string>({
      query: () => ({
        url: '/api/services',
      }),
    }),
    fetchServiceDetails: builder.query<IFetchServices, string>({
      query: (id: string) => ({
        url: `/api/services/${id}`,
      }),
    }),
  }),
})

export const { useFetchServicesQuery, useFetchServiceDetailsQuery } = servicesAPI
