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
  }),
});

export const { usePostUserMutation } = userApi;
