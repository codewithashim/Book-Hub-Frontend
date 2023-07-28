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
      providesTags: ["book"],
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
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
    }),
    postReview: builder.mutation({
      query: ({ bookId, data }) => ({
        url: `/books/id/${bookId}/review`,
        method: "POST",
        body: data,
      }),
    }),

    postWishlist: builder.mutation({
      query: ({ data }) => ({
        url: `/wishlist/add-to-wishlist`,
        method: "POST",
        body: data,
      }),
    }),

    deleteWishlist: builder.mutation({
      query: (wishListId) => ({
        url: `/wishlist/delete-wishlist/${wishListId}`,
        method: "DELETE",
      }),
    }),

    getWishlist: builder.query({
      query: () => ({
        url: `/wishlist/get-wishlist`,
        method: "GET",
      }),
    }),

    getWishlistByUserEmail: builder.query({
      query: (email) => `/wishlist/get-wishlist-by-user-email/${email}`,
      providesTags: ["book"],
    }),

    getWishlistById: builder.query({
      query: (id) => `/wishlist/get-wishlist/${id}`,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useCreateBookMutation,
  usePostReviewMutation,
  usePostWishlistMutation,
  useDeleteWishlistMutation,
  useGetWishlistQuery,
  useGetWishlistByUserEmailQuery,
  useGetWishlistByIdQuery,
} = bookApi;
