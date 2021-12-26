import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { CRYPTO_API_HOST, CRYPTO_API_API_KEY } = process.env;

const baseURL= `https://${CRYPTO_API_HOST}`;

const cryptoAPIHeaders = {
  'x-rapidapi-host': CRYPTO_API_HOST,
  'x-rapidapi-key': CRYPTO_API_API_KEY
}
