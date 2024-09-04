import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IAlbum } from '../../../types'
import { toast } from "react-toastify";

// Define a type for the slice state
interface AlbumsState {
    albums: IAlbum[];
    // Loading indicators
    loadingAlbums: boolean,
    searchingAlbums: boolean,
    // Success indicators
    albumsFetched: boolean,
    searchAlbumsComplete: boolean,
    //Errors
    fetchAlbumsError: string,
    searchAlbumsError: string,
}

// Defining an initial state
const initialState: AlbumsState = {
    albums: [],
    // Loading indicators
    loadingAlbums: false,
    searchingAlbums: false,
    // Success indicators
    albumsFetched: false,
    searchAlbumsComplete: false,
    //Errors
    fetchAlbumsError: '',
    searchAlbumsError: '',
}

const albumsSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {
        // Reducers related getting albums
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
            console.error(`Failed to fetch albums ${action.payload}`);
            toast.error(`Failed to fetch albums`);
        },
        // Reducers related searching albums
        searchAlbumsRequested: (state: any) => {
            state.searchingAlbums = true;
            console.log("Searching albums ...");
        },
        searchAlbumsSucceeded: (state: any, action: PayloadAction<IAlbum[]>) => {
            state.searchingAlbums = false;
            state.searchAlbumsComplete = true;
            state.albums = action.payload;
            console.log("Albums searched successfully");
        },
        searchAlbumsFailed: (state: any, action: PayloadAction<string>) => {
            state.searchingAlbums = false;
            state.searchAlbumsComplete = false;
            state.searchAlbumsError = action.payload;
            console.error(`Failed to search albums ${action.payload}`);
            toast.error(`Failed to search albums`);
        },
    }
})

export const { 
    fetchAlbumsRequested, 
    fetchAlbumsSucceeded,
    fetchAlbumsFailed,
    searchAlbumsRequested,
    searchAlbumsSucceeded,
    searchAlbumsFailed,
} = albumsSlice.actions;

export default albumsSlice.reducer;