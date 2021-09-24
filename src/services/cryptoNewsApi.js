import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '13e2810994msh948dfb418dee1e4p1ef656jsn70c2441337be'
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com/";
 
// Utility fn() to add URL and the corresponding header
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi', // What is this reducer for
    baseQuery: fetchBaseQuery({ baseUrl }),

    // Endpoints = a fn(), where a builder is available as the 1st param, which is fn() that returns an obj, within which the names of the-
    //- endpoints can be mentioned/specified
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            // To make this request, the header should also be passed. The URL and the header are added to teh call using an utility fn() 
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })   
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
