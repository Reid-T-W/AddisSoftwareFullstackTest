import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IArtist } from '../../../types'
import { toast } from "react-toastify";

// Define a type for the slice state
interface ArtistState {
    artists: IArtist[];
    // Loading indicators
    loadingArtists: boolean,
    // Success indicators
    artistsFetched: boolean,
    //Errors
    fetchArtistsError: string,
}

// Defining an initial state
const initialState: ArtistState = {
    artists: [],
    // Loading indicators
    loadingArtists: false,
    // Success indicators
    artistsFetched: false,
    //Errors
    fetchArtistsError: '',
}

const artistSlice = createSlice({
    name: "artists",
    initialState,
    reducers: {
        // Reducers related getting songs
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
            toast.error(`Failed to fetch artists ${action.payload}`)
        },
    }
})

export const { 
    fetchArtistsRequested, 
    fetchArtistsSucceeded,
    fetchArtistsFailed,
} = artistSlice.actions;

export default artistSlice.reducer;