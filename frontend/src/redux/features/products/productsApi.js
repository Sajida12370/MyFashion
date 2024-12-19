// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
// import { getBaseUrl } from "../../../utils/baseUrl"

// const productsApi=createApi ({
//      reducerPath: 'productsApi',
//      baseQuery: fetchBaseQuery({
//         baseUrl:`${getBaseUrl()}/api/products`,
//         credentials:'include'
//      }),
//      tagTypes:["Products"],
//      endpoints:(builder)=>({
//         fetchAllProducts:builder.query({
//             query:({category,color,minPrice,maxPrice,page=1,limit=10})=>{
//                 const queryParams= new URLSearchParams({

//                     category:category || '',
//                     color:color || '',
//                     minPrice:minPrice || 0,
//                     maxPrice:maxPrice || '',
//                     page:page.toString(),
//                     limit:limit.toString(),
//                 }).toString()

//                 return `/?${queryParams}`
//             },
//             providesTags:["Products"]
//         }),

//         fetchProductById: (builder) =>({
//             query:(id)=>`/${id}`,
//             providesTags:(result,error,id) =>[{type:"Products",id}],
//         }),

//         AddProduct:builder.mutation({
//             query:(newProduct)=>({
//                 url:"/create-product",
//                 method:"POST",
//                 body:newProduct,
//                 credentials: "include"

//             }),
//             invalidatesTags:["Products"]

//         }),

//         fetchRelatedProducts:builder.query({
//             query:(id)=>`related/${id}`
//         }),
//         updateProduct: builder.mutation({
//             query:({id, ...rest})=> ({

//                 url:`update-product/${id}`,
//                 method:"PATCH",
//                 body:rest,
//                 credentials:"include",
//             }),
//             invalidatesTags:["Products"],

//         }),

//         deleteProduct:builder.mutation({
//             query:({id})=> ({

//                 url:`/${id}`,
//                 method:"DELETE",
//                 credentials:"include",
//             }),
//             invalidatesTags:(result,error,id)=>[{type:"Products",id}]
//         }),

//      }),
// })

// export const {useFetchAllProductsQuery} =productsApi
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { getBaseUrl } from "../../../utils/baseUrl";

// const productsApi = createApi({
//     reducerPath: 'productsApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: `${getBaseUrl()}/api/products`,
//         credentials: 'include',
//     }),
//     tagTypes: ["Products"],
//     endpoints: (builder) => ({
//         fetchAllProducts: builder.query({
//             query: ({ category, color, minPrice, maxPrice, page = 1, limit = 10 }) => {
//                 const queryParams = new URLSearchParams({
//                     category: category || '',
//                     color: color || '',
//                     minPrice: minPrice || 0,
//                     maxPrice: maxPrice || '',
//                     page: page.toString(),
//                     limit: limit.toString(),
//                 }).toString();
//                 return `/?${queryParams}`;
//             },
//             providesTags: ["Products"],
//         }),

//         fetchProductById: builder.query({
//             query: (id) => `/${id}`,
//             providesTags: (result, error, id) => [{ type: "Products", id }],
//         }),

//         addProduct: builder.mutation({
//             query: (newProduct) => ({
//                 url: "/create-product",
//                 method: "POST",
//                 body: newProduct,
//                 credentials: "include",
//             }),
//             invalidatesTags: ["Products"],
//         }),

//         fetchRelatedProducts: builder.query({
//             query: (id) => `related/${id}`,
//         }),

//         updateProduct: builder.mutation({
//             query: ({ id, ...rest }) => ({
//                 url: `update-product/${id}`,
//                 method: "PATCH",
//                 body: rest,
//                 credentials: "include",
//             }),
//             invalidatesTags: ["Products"],
//         }),

//         deleteProduct: builder.mutation({
//             query: ({ id }) => ({
//                 url: `/${id}`,
//                 method: "DELETE",
//                 credentials: "include",
//             }),
//             invalidatesTags: (result, error, id) => [{ type: "Products", id }],
//         }),
//     }),
// });

// // Export hooks for usage in functional components
// export const {
//     useFetchAllProductsQuery,
//     useFetchProductByIdQuery,
//     useAddProductMutation,
//     useFetchRelatedProductsQuery,
//     useUpdateProductMutation,
//     useDeleteProductMutation,
// } = productsApi;

// export default productsApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../utils/baseUrl";

const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/products`, // Backticks added here
        credentials: 'include',
    }),
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        fetchAllProducts: builder.query({
            query: ({ category, color, minPrice, maxPrice, page = 1, limit = 10 }) => {
                const queryParams = new URLSearchParams({
                    category: category || '',
                    color: color || '',
                    minPrice: minPrice || 0,
                    maxPrice: maxPrice || '',
                    page: page.toString(),
                    limit: limit.toString(),
                }).toString();
                return `/?${queryParams}`; // Backticks added here
            },
            providesTags: ["Products"],
        }),

        fetchProductById: builder.query({
            query: (id) => `/${id}`, // Backticks added here
            providesTags: (result, error, id) => [{ type: "Products", id }],
        }),

        addProduct: builder.mutation({
            query: (newProduct) => ({
                url: "/create-product",
                method: "POST",
                body: newProduct,
                credentials: "include",
            }),
            invalidatesTags: ["Products"],
        }),

        fetchRelatedProducts: builder.query({
            query: (id) => `related/${id}`, // Backticks added here
        }),

        updateProduct: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `update-product/${id}`, // Backticks added here
                method: "PATCH",
                body: rest,
                credentials: "include",  
            }),
            invalidatesTags: ["Products"],
        }),

        deleteProduct: builder.mutation({
            query: ({ id }) => ({
                url: `/${id}`, // Backticks added here
                method: "DELETE",
                credentials: "include",
            }),
            invalidatesTags: (result, error, id) => [{ type: "Products", id }],
        }),
    }),
});

// Export hooks for usage in functional components
export const {
    useFetchAllProductsQuery,
    useFetchProductByIdQuery,
    useAddProductMutation,
    useFetchRelatedProductsQuery,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productsApi;

export default productsApi;
