import { configureStore } from "@reduxjs/toolkit";

// Importing the API from services/CryptoAPI
import { cryptoApi } from '../services/cryptoApi'
import { cryptoNewsApi } from '../services/cryptoNewsApi'

export default configureStore({ 
    reducer: {
        // Redux will do everything to maek dev easier, and the reducerPath and reducer have to be connect for every reducer that-
        //- has been created
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    } 
});