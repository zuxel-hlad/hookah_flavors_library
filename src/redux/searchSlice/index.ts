import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearch } from './searchSlice.types';

const initialState: ISearch = {
    search: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, { payload }: PayloadAction<string>) => {
            state.search = payload;
        },
    },
});

const { actions, reducer } = searchSlice;
export const { setSearch } = actions;
export default reducer;
