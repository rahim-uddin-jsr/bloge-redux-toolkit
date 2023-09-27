import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/posts",
    }),
    getBlogsById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
  }),
});
export const { useGetBlogsQuery, useGetBlogsByIdQuery } = baseApi;

export default baseApi;
