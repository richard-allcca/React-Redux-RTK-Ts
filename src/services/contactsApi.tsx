import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Contact } from '../models/contact.model';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3006/' }),

  tagTypes: ['Contact'], // https://redux-toolkit.js.org/rtk-query/api/createApi#tagtypes

  endpoints: (builder) => ({
    contacts: builder.query<Contact[], void>({
      query: () => '/contacts',
      providesTags: ['Contact']
    }),
    contact: builder.query<Contact, string>({
      query: (id) => `/contacts/${id}`,
      providesTags: ['Contact']
    }),
    addContact: builder.mutation<Contact, Contact>({
      query: (contact) => ({
        url: '/contacts',
        method: 'POST',
        body: contact
      }),
      invalidatesTags: ['Contact']
    }),
    updateContact: builder.mutation<Contact, Contact>({
      query: ({ id, ...rest }) => ({
        url: `/contacts/${id}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['Contact']
    }),
    deleteContact: builder.mutation<void, string>({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Contact']
    })
  })
});

export const {
  useContactsQuery,
  useContactQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation
} = contactsApi;

// NOTE - en los query se utiliza una función que q la vez se ejecuta
