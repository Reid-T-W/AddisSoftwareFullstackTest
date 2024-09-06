import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IStats } from '../../../types'
import { toast } from "react-toastify";

// Define a type for the slice state
interface StatsState {
    stats: IStats;
    loadingStats: boolean;
}

// Defining an initial state
const initialState: StatsState = {
    stats: {songsCount: 0, artistsCount: 0, albumsCount: 0, genresCount: 0},
    loadingStats: false
}

const statsSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
        // Reucers related to stats state
        fetchStatsRequested: (state: any) => {
            state.loadingStats = true;
            console.log("Fetching stats ...");
        },
        fetchStatsSucceeded: (state: any, action: PayloadAction<IStats>) => {
            state.loadingStats = false
            state.stats = action.payload;
            console.log("Stats fetched successfully");
        },
        fetchStatsFailed: (state: any, action: PayloadAction<string>) => {
            state.loadingStats = false
            console.error(`Failed to fetch stats ${action.payload}`)
            toast.error('Failed to fetch stats')
        },
    }
})
export const { 
    fetchStatsRequested, 
    fetchStatsSucceeded,
    fetchStatsFailed
} = statsSlice.actions;

export default statsSlice.reducer;