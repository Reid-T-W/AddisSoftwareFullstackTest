import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IGenre } from '../../../types'
import { toast } from "react-toastify";

// Define a type for the slice state
interface GenreState {
    genres: IGenre[];
    // Loading indicators
    loadingGenres: boolean,
    searchingGenres: boolean,
    // Success indicators
    genresFetched: boolean,
    searchGenresComplete:boolean;
    //Errors
    fetchGenresError: string,
    searchGenresError: string,
}

// Defining an initial state
const initialState: GenreState = {
    genres: [],
    // Loading indicators
    loadingGenres: false,
    searchingGenres: false,
    // Success indicators
    genresFetched: false,
    searchGenresComplete: false,
    //Errors
    fetchGenresError: '',
    searchGenresError: '',
}

const genreSlice = createSlice({
    name: "genres",
    initialState,
    reducers: {
        // Reducers related to getting genres
        fetchGenresRequested: (state: any) => {
            state.loadingGenres = true;
            console.log("Fetching genres ...");
        },
        fetchGenresSucceeded: (state: any, action: PayloadAction<IGenre[]>) => {
            state.loadingGenres = false;
            state.genresFetched = true;
            state.genres = action.payload;
            console.log("Genres fetched successfully");
        },
        fetchGenresFailed: (state: any, action: PayloadAction<string>) => {
            state.loadingGenres = false;
            state.genresFetched = false;
            state.fetchGenresError = action.payload;
            toast.error(`Failed to fetch genres ${action.payload}`)
        },
        // Reducers related to searching genres
        searchGenresRequested: (state: any) => {
            state.searchingGenres = true;
            console.log("Searching genres ...");
        },
        searchGenresSucceeded: (state: any, action: PayloadAction<IGenre[]>) => {
            state.searchingGenres = false;
            state.searchGenresComplete = true;
            state.genres = action.payload;
            console.log("Genres searched successfully");
        },
        searchGenresFailed: (state: any, action: PayloadAction<string>) => {
            state.searchingGenres = false;
            state.searchGenresComplete = false;
            state.searchGenresError = action.payload;
            toast.error(`Failed to search genres ${action.payload}`)
        },
    }
})

export const { 
    fetchGenresRequested, 
    fetchGenresSucceeded,
    fetchGenresFailed,
    searchGenresRequested,
    searchGenresSucceeded,
    searchGenresFailed,
} = genreSlice.actions;

export default genreSlice.reducer;