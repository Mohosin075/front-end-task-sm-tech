// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-fresh-harvest.code-commando.com/api/v1",
    // credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("authorization", `${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ title, sort, category, page }) => {
        // const queryParams = new URLSearchParams({
        //   title: title || "",
        //   sort: sort || "asc",
        //   category: category || "",
        //   page: page || 1,
        // }).toString();

        // return `/products?${queryParams}`;
        return `/products`;
      },
    }),
    getSingleProduct: builder.query({
      query: ({productId}) => {
        return `/products/${productId}`;
      },
    }),
    getCategories: builder.query({
      query: () => {
        return `/category`;
      },
    }),
    getSingleCategories: builder.query({
      query: ({categoryId}) => {
        console.log(categoryId);
        return `/category/${categoryId}`;
      },
    }),
  }),
});

export const { useGetProductQuery, useGetCategoriesQuery, useGetSingleProductQuery , useGetSingleCategoriesQuery} = baseApi;
