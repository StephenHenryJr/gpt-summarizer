// These functions are part of the Redux Toolkit Query package, which is used for making API requests and managing the data returned from those requests.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'dc0c32a409msh847f1dac53b04a2p14928cjsn1c430baa58a3');
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi