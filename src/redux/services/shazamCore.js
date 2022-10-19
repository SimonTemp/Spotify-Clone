import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const shazamCoreApi = createApi({

    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers) => {
            headers.set('X-RapidAPI-Key','2235f7fa58msh4bbd1f4ca97b3efp16c943jsn1429040df25f'),
            headers.set('X-RapidAPI-Host','shazam-core.p.rapidapi.com')
            return headers;
        }
    }),
    endpoints:(builder) => ({

        getTopCharts:builder.query({query: () => '/charts/world'})

    })
})

export const {
    useGetTopChartsQuery,
} = shazamCoreApi