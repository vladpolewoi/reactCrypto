import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
	"x-rapidapi-host": "coinranking1.p.rapidapi.com",
	"x-rapidapi-key": "56eaaa1dd7msh59b5d5ee5750c32p13f00ajsn43a8f14f039d",
}

const baseUrl = "https://coinranking1.p.rapidapi.com"

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: () => createRequest("/coins"),
		}),
	}),
})

export const { useGetCryptosQuery } = cryptoApi

// var options = {
// 	method: "GET",
// 	url: "https://coinranking1.p.rapidapi.com/coins",
// 	params: {
// 		referenceCurrencyUuid: "yhjMzLPhuIDl",
// 		timePeriod: "24h",
// 		tiers: "1",
// 		orderBy: "marketCap",
// 		orderDirection: "desc",
// 		limit: "50",
// 		offset: "0",
// 	},
// 	headers: {
// 		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
// 		"x-rapidapi-key": "56eaaa1dd7msh59b5d5ee5750c32p13f00ajsn43a8f14f039d",
// 	},
// }
