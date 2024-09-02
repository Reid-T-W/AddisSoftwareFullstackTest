import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ISong } from '../../../types'
import { toast } from "react-toastify";

// Define a type for the slice state
interface SongsState {
    songs: ISong[];
    song: ISong;
    // Loaders
    loadingSongs: boolean;
    addingSong: boolean;
    updatingSong: boolean;
    deletingSong: boolean;
    // Success Indicators
    songFetched: boolean;
    songAdded: boolean;
    songUpdated: boolean;
    songDeleted: boolean;
    // Error Indicators
    fetchSongsError: string;
    addSongError: string;
    updateSongError: string;
    deleteSongError: string;

}

// Defining an initial state
const initialState: SongsState = {
    songs: [],

    // Loading inidicators
    loadingSongs: false,
    addingSong: false,

    // Success indicators
    songFetched: false,
    songAdded: false,

    // Error indicators
    fetchSongsError: "",
    addSongError: "",
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
            state.loadingSongs = false;
            state.songFetched = true;
            state.songs = action.payload;
            console.log("Songs fetched successfully");
        },
        fetchSongsFailed: (state: any, action: PayloadAction<string>) => {
            state.loadingSongs = false;
            state.songFetched = false;
            state.fetchSongsError = action.payload;
            toast.error(`Failed to fetch songs ${action.payload}`)
        },
        addSongRequested: (state: any) => {
            state.addingSong = true;
            console.log("Adding Song ...")
        },
        addSongSucceeded: (state, action) => {
            state.addingSong = false;
            state.songAdded = true;
            console.log("Song added successfully")
            toast.success("Song added successfully")
        },
        addSongFailed: (state, action) => {
            state.addingSong = false;
            state.songAdded = false;
            state.addSongError = action.payload;
            toast.error(`Failed to add song ${action.payload}`)
        },
    }
})
export const { 
    fetchSongsRequested, 
    fetchSongsSucceeded,
    fetchSongsFailed,
    addSongRequested,
    addSongSucceeded,
    addSongFailed
} = songsSlice.actions;

export default songsSlice.reducer;