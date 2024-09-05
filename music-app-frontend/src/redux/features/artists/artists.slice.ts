import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IArtist } from '../../../types'
import { toast } from "react-toastify";

// Define a type for the slice state
interface ArtistState {
    artists: IArtist[];
    // Loading indicators
    loadingArtists: boolean,
    searchingArtists: boolean,
    // Success indicators
    artistsFetched: boolean,
    searchArtistsComplete: boolean,
    //Errors
    fetchArtistsError: string,
    searchArtistsError: string,
}

// Defining an initial state
const initialState: ArtistState = {
    artists: [],
    // Loading indicators
    loadingArtists: false,
    searchingArtists: false,
    // Success indicators
    artistsFetched: false,
    searchArtistsComplete: false,
    //Errors
    fetchArtistsError: '',
    searchArtistsError: '',
}

const artistSlice = createSlice({
    name: "artists",
    initialState,
    reducers: {
        // Reducers related to getting artists
        fetchArtistsRequested: (state: any) => {
            state.loadingArtists = true;
            console.log("Fetching artists ...");
        },
        fetchArtistsSucceeded: (state: any, action: PayloadAction<IArtist[]>) => {
            state.loadingArtists = false;
            state.artistsFetched = true;
            state.artists = action.payload;
            console.log("Artists fetched successfully");
        },
        fetchArtistsFailed: (state: any, action: PayloadAction<string>) => {
            state.loadingArtists = false;
            state.artistsFetched = false;
            state.fetchArtistsError = action.payload;
            console.error(`Failed to fetch artists ${action.payload}`);
            toast.error(`Failed to fetch artists`);
        },
        // Reducers related searching artists
        searchArtistsRequested: (state: any) => {
            state.searchingArtists = true;
            console.log("Searching artists ...");
        },
        searchArtistsSucceeded: (state: any, action: PayloadAction<IArtist[]>) => {
            state.searchingArtists = false;
            state.searchArtistsComplete = true;
            state.artists = action.payload;
            console.log("Artists searched successfully");
        },
        searchArtistsFailed: (state: any, action: PayloadAction<string>) => {
            state.searchingArtists = false;
            state.searchArtistsComplete = false;
            state.searchArtistsError = action.payload;
            console.error(`Failed to search artists ${action.payload}`);
            toast.error(`Failed to search artists`);
        },
    }
})

export const { 
    fetchArtistsRequested, 
    fetchArtistsSucceeded,
    fetchArtistsFailed,
    searchArtistsRequested,
    searchArtistsSucceeded,
    searchArtistsFailed,
} = artistSlice.actions;

export default artistSlice.reducer;