import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ISong } from '../../../types'
import { toast } from "react-toastify";

// Define a type for the slice state
interface SongsState {
    songs: ISong[];
    song?: ISong | null;
    // Loaders
    loadingSongs: boolean;
    addingSong: boolean;
    updatingSong: boolean;
    deletingSong: boolean;
    loadingSongDetails: boolean;
    // Success Indicators
    songFetched: boolean;
    songAdded: boolean;
    songDeleted: boolean;
    songDetailUpdated: boolean;
    songDetailsFetched: boolean;
    // Error Indicators
    fetchSongsError: string;
    addSongError: string;
    updateSongError: string;
    deleteSongError: string;
    getSongDetailsError: string;
    updateSongDetailsError: string;

}

// Defining an initial state
const initialState: SongsState = {
    songs: [],
    song: null,
    // Loading inidicators
    loadingSongs: false,
    addingSong: false,
    updatingSong: false,
    deletingSong: false,
    loadingSongDetails: false,

    // Success indicators
    songFetched: false,
    songAdded: false,
    songDeleted: false,
    songDetailUpdated: false,
    songDetailsFetched: false,

    // Error indicators
    fetchSongsError: "",
    addSongError: "",
    updateSongError: "",
    deleteSongError: "",
    getSongDetailsError: "",
    updateSongDetailsError: "",
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
        fetchSongDetailsRequested: (state: any) => {
            state.loadingSongDetails = true;
            console.log("Fetching song details ...");

        },
        fetchSongDetailsSucceeded: (state: any, action: PayloadAction<ISong>) => {
            state.loadingSongDetails = false;
            state.songDetailsFetched = true;
            state.song = action.payload;
            console.log("Songs details fetched successfully");
        },
        fetchSongDetailsFailed: (state: any, action: PayloadAction<string>) => {
            state.loadingSongDetails = false;
            state.songDetailsFetched = false;
            state.getSongDetailsError = action.payload;
            toast.error(`Failed to fetch song details ${action.payload}`)
        },
        setSongToEmpty: (state: any) => {
            state.song = null;
        }
    }
})
export const { 
    fetchSongsRequested, 
    fetchSongsSucceeded,
    fetchSongsFailed,
    addSongRequested,
    addSongSucceeded,
    addSongFailed,
    fetchSongDetailsRequested,
    fetchSongDetailsSucceeded,
    fetchSongDetailsFailed,
    setSongToEmpty
} = songsSlice.actions;

export default songsSlice.reducer;