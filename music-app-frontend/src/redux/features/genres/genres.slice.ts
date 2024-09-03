import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IGenre } from '../../../types'
import { toast } from "react-toastify";

// Define a type for the slice state
interface GenreState {
    genres: IGenre[];
    // Loading indicators
    loadingGenres: boolean,
    // Success indicators
    genresFetched: boolean,
    //Errors
    fetchGenresError: string,
}

// Defining an initial state
const initialState: GenreState = {
    genres: [],
    // Loading indicators
    loadingGenres: false,
    // Success indicators
    genresFetched: false,
    //Errors
    fetchGenresError: '',
}

const genreSlice = createSlice({
    name: "genres",
    initialState,
    reducers: {
        // Reducers related getting songs
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
    }
})

export const { 
    fetchGenresRequested, 
    fetchGenresSucceeded,
    fetchGenresFailed,
} = genreSlice.actions;

export default genreSlice.reducer;