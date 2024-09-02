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
    deletingSong: boolean;
    updatingSongDetails: boolean;
    loadingSongDetails: boolean;
    
    // Success Indicators
    songFetched: boolean;
    songAdded: boolean;
    songDeleted: boolean;
    songDetailUpdated: boolean;
    songDetailsFetched: boolean;

    // Errors
    fetchSongsError: string;
    addSongError: string;
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
    deletingSong: false,
    updatingSongDetails: false,
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
    deleteSongError: "",
    getSongDetailsError: "",
    updateSongDetailsError: "",
}

const songsSlice = createSlice({
    name: "songs",
    initialState,
    reducers: {
        // Reducers related getting songs
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

        // Reducers related to adding a song
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

        // Reducers related to getting song details
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

        // Reducers related to updating a song
        updateSongRequested: (state: any) => {
            state.updatingSongDetails = true;
            console.log("Updating Song ...")
        },
        updateSongSucceeded: (state, action) => {
            state.updatingSongDetails = false;
            state.songDetailUpdated = true;
            console.log("Song updated successfully")
            toast.success("Song updated successfully")
        },
        updateSongFailed: (state, action) => {
            state.updatingSongDetails = false;
            state.songDetailUpdated = false;
            state.updateSongDetailsError = action.payload;
            toast.error(`Failed to update song ${action.payload}`)
        },

        // Reducers related to deleting a song
        deleteSongRequested: (state: any) => {
            state.deletingSong = true;
            console.log("Deleting Song ...")
        },
        deleteSongSucceeded: (state, action) => {
            state.deletingSong = false;
            state.songDeleted = true;
            console.log("Song deleted successfully")
            toast.success("Song deleted successfully")
        },
        deleteSongFailed: (state, action) => {
            state.updatingSongDetails = false;
            state.songDeleted = false;
            state.deleteSongError = action.payload;
            toast.error(`Failed to delete song ${action.payload}`)
        },

        // Reducer for setting the song state to null
        setSongToEmpty: (state: any) => {
            state.song = null;
        },

        // Reducers for setting song deleted to false
        setSongDeletedToFalse: (state: any) => {
            state.songDeleted = false;
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
    updateSongRequested,
    updateSongSucceeded,
    updateSongFailed,
    deleteSongRequested,
    deleteSongSucceeded,
    deleteSongFailed,
    setSongToEmpty,
    setSongDeletedToFalse
} = songsSlice.actions;

export default songsSlice.reducer;