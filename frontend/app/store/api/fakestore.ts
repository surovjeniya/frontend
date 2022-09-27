export const FAKESTORE_API_URL = "https://fakestoreapi.com";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}

export const fakestoreApi = createApi({
  reducerPath: "fakestoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: FAKESTORE_API_URL,
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "/products/categories",
    }),
    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `/products/category/${category}`,
    }),
    getSingleProduct: builder.query<Product, number>({
      query: (product) => `/products/${product}`,
    }),
    getAllProducts: builder.query<Product[], string>({
      query: () => `/products`,
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
  useGetSingleProductQuery,
} = fakestoreApi;
