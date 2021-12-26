import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { CRYPTO_API_HOST, CRYPTO_API_API_KEY } = process.env;

const baseURL= `https://${CRYPTO_API_HOST}`;

const cryptoAPIHeaders = {
  'x-rapidapi-host': CRYPTO_API_HOST,
  'x-rapidapi-key': CRYPTO_API_API_KEY
}

// Utility fn() to add URL and the corresponding header
const createRequest = (url) => ({ url, headers: cryptoAPIHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi', // What is this reducer for
    baseQuery: fetchBaseQuery({ baseURL }),

    // Endpoints = A fn(), where a builder is available as the 1st param, which is fn() that returns an obj, within which the names of the-
    //- endpoints can be mentioned/specified
    endpoints: (builder) => ({
        getCryptos: builder.query({
            // To make this request, the header should also be passed. The URL and the header are added to the call using an utility fn() 
            query: count => createRequest(`/coins?limit=${count}`)
        }),
    })
});