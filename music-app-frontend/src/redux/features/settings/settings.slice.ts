import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Types } from '../../../utils/constants/types'

// Define a type for the slice state
interface SettingsState {
    selectedTab: string
}

// Defining an initial state
const initialState: SettingsState = {
    selectedTab: Types.songs,
}

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        // Functions related to settings state
        setSelectedTab: (state: any, action: PayloadAction<string>) => {
            state.selectedTab = action.payload;
            console.log("Updated selected tab to: ", action.payload);
        }
    }
})
export const { 
    setSelectedTab, 
} = settingsSlice.actions;

export default settingsSlice.reducer;