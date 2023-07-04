import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFlavorsState } from './flavorsSlice.types';

const initialState: IFlavorsState = {
    flavors: [],
    loadingStatus: 'idle',
};

const flavorsSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
});

const { actions, reducer } = flavorsSlice;
// export const { null } = actions;
export default reducer;
