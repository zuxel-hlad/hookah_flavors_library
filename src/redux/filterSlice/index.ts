import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilter } from './filterSlice.types';

const initialState: IFilter = {
    filter: 'all',
};

const searchSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, { payload }: PayloadAction<string>) => {
            state.filter = payload;
        },
    },
});

const { actions, reducer } = searchSlice;
export const { setFilter } = actions;
export default reducer;
