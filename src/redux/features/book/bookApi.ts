import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: `/books`,
        method: "GET",
      }),
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    createBook: builder.mutation({
      query: ({ data }) => ({
        url: `/books/create-book`,
        method: "POST",
        body: data,
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
        body: id,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetSingleBookQuery } = bookApi;
