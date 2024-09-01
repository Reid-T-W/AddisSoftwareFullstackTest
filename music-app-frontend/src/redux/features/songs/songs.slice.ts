import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ISong } from '../../../types'
import { toast } from "react-toastify";

// Define a type for the slice state
interface SongsState {
    songs: ISong[]
    loadingSongs: boolean;
}

// Defining an initial state
const initialState: SongsState = {
    songs: [],
    loadingSongs: false
}

const songsSlice = createSlice({
    name: "songs",
    initialState,
    reducers: {
        // Functions related to songs state
        fetchSongsRequested: (state: any) => {
            state.loadingSongs = true;
            console.log("Fetching songs ...");
        },
        fetchSongsSucceeded: (state: any, action: PayloadAction<ISong[]>) => {
            state.loadingSongs = false
            state.songs = action.payload;
            console.log("Songs fetched successfully");
        },
        fetchSongsFailed: (state: any, action: PayloadAction<string>) => {
            state.loadingSongs = false
            toast.error(`Failed to fetch songs ${action.payload}`)
        },
    }
})
export const { 
    fetchSongsRequested, 
    fetchSongsSucceeded,
    fetchSongsFailed
} = songsSlice.actions;

export default songsSlice.reducer;