import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IAlbum } from '../../../types'
import { toast } from "react-toastify";

// Define a type for the slice state
interface AlbumsState {
    albums: IAlbum[];
    // Loading indicators
    loadingAlbums: boolean,
    // Success indicators
    albumsFetched: boolean,
    //Errors
    fetchAlbumsError: string,
}

// Defining an initial state
const initialState: AlbumsState = {
    albums: [],
    // Loading indicators
    loadingAlbums: false,
    // Success indicators
    albumsFetched: false,
    //Errors
    fetchAlbumsError: '',
}

const albumsSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {
        // Reducers related getting songs
        fetchAlbumsRequested: (state: any) => {
            state.loadingAlbums = true;
            console.log("Fetching albums ...");
        },
        fetchAlbumsSucceeded: (state: any, action: PayloadAction<IAlbum[]>) => {
            state.loadingAlbums = false;
            state.albumsFetched = true;
            state.albums = action.payload;
            console.log("Albums fetched successfully");
        },
        fetchAlbumsFailed: (state: any, action: PayloadAction<string>) => {
            state.loadingAlbums = false;
            state.albumsFetched = false;
            state.fetchAlbumsError = action.payload;
            toast.error(`Failed to fetch albums ${action.payload}`)
        },
    }
})

export const { 
    fetchAlbumsRequested, 
    fetchAlbumsSucceeded,
    fetchAlbumsFailed,
} = albumsSlice.actions;

export default albumsSlice.reducer;