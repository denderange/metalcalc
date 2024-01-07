import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
	demensions: "millimeters" | "inches",
	product: string,
	metal: string
}

const initialState: AppState = {
	demensions: "millimeters",
	product: "",
	metal: ""
}

export const appStateSlice = createSlice({
	name: 'appState',
	initialState,
	reducers: {
		switchDemension: (state, action: PayloadAction<boolean>) => {
			state.demensions = action.payload === true ? "millimeters" : "inches"
		},
		switchProduct: (state, action: PayloadAction<string>) => {
			state.product = action.payload
		},
		switchMetal: (state, action: PayloadAction<string>) => {
			state.metal = action.payload
		}
	}
})

export const { switchDemension, switchProduct, switchMetal } = appStateSlice.actions

export default appStateSlice.reducer