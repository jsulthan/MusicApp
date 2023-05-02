
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_API);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'charts/track' }),
    getSongsByGenre: builder.query({ query: (genre) => `charts/track?genre_code=${genre}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `charts/list?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `shazam-events/list?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    getArtistDetails: builder.query({ query: (artistId) => `artists/get-details?artist_id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `songs/v2/get-details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `songs/get-related-artist?track_id=${songid}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
