import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.GATSBY_API_URL }),
  endpoints: (builder) => ({
    getUserToken: builder.query({
      query(body) {
        return {
          url: "/api/login",
          method: "POST",
          body,
        };
      },
    }),

    getMe: builder.query({
      query(body) {
        return {
          url: "/me",
          method: "GET",
          body,
        };
      },
    }),

    utilizeRefreshToker: builder.query({
      query(body) {
        return {
          url: "/refresh-token",
          method: "POST",
          body,
        };
      },
    }),
    //Insert Method here.
  }),
});

export const { useGetUserTokenQuery } = authApi;
