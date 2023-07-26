import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postUser: builder.mutation({
      query: ({ data }) => ({
        url: `/users/create-user`,
        method: "POST",
        body: data,
      }),
    }),
    getSingelUser: builder.query({
      query: (id) => `/users/id/${id}`,
    }),
    getAllUsers: builder.query({
      query: () => `/users`,
    }),
  }),
});

export const {
  usePostUserMutation,
  useGetSingelUserQuery,
  useGetAllUsersQuery,
} = userApi;
