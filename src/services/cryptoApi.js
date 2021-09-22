import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

// createApi(): The core of RTK Query's functionality. It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data. In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb.
// fetchBaseQuery(): A small wrapper around fetch that aims to simplify requests. Intended as the recommended baseQuery to be used in createApi for the majority of users.

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '13e2810994msh948dfb418dee1e4p1ef656jsn70c2441337be'
}

const baseURI =  'https://coinranking1.p.rapidapi.com/exchanges';
 
// Utility fn() to add URL and the corresponding header
const createRequest = url => ({ url, cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi', // What is this reducer for
    baseQuery: fetchBaseQuery({ baseURI }),
    
    // Endpoints = a fn(), where a builder is available as the 1st param, which is fn() that returns an obj, within which the names of the-
    //- endpoints can be mentioned/specified
    endpoints: (builder) => {
        getCryptos: builder.query({
            // To make this request, the header should also be passed. The URL and the header are added to teh call using an utility fn() 
            query: () => createRequest('/exchanges')
        })
    }   
})
