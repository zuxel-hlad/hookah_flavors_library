import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFlavorsState } from './flavorsSlice.types';
import {
    getFlavors,
    addFlavor,
    updateRating,
} from './flavorsSlice.async.actions';
import { IFlavor, IUpdateRatingOptions } from './flavorsSlice.types';

const initialState: IFlavorsState = {
    flavors: [],
    flavorsLoadingStatus: 'idle',
    flavorRatingLoadingStatus: 'idle',
};

const flavorsSlice = createSlice({
    name: 'flavors',
    initialState,
    reducers: {},
    extraReducers: ({ addCase, addDefaultCase }) => {
        //getFlavors
        addCase(getFlavors.pending, state => {
            state.flavorsLoadingStatus = 'loading';
        });
        addCase(
            getFlavors.fulfilled,
            (state, { payload }: PayloadAction<IFlavor[]>) => {
                state.flavors = payload;
                state.flavorsLoadingStatus = 'idle';
            }
        );
        addCase(getFlavors.rejected, state => {
            state.flavorsLoadingStatus = 'error';
        });

        //addFlavor
        addCase(addFlavor.pending, state => {
            state.flavorsLoadingStatus = 'loading';
        });
        addCase(
            addFlavor.fulfilled,
            (state, { payload }: PayloadAction<IFlavor>) => {
                state.flavors.push(payload);
                state.flavorsLoadingStatus = 'idle';
            }
        );
        addCase(addFlavor.rejected, state => {
            state.flavorsLoadingStatus = 'error';
        });

        //updateFlavorRating
        addCase(updateRating.pending, state => {
            state.flavorRatingLoadingStatus = 'loading';
        });
        addCase(
            updateRating.fulfilled,
            (state, { payload }: PayloadAction<IUpdateRatingOptions>) => {
                state.flavors = state.flavors.map(flavor => {
                    if (flavor.id === payload.id) {
                        return {
                            ...flavor,
                            rating: payload.rating,
                        };
                    } else {
                        return flavor;
                    }
                });
                state.flavorRatingLoadingStatus = 'idle';
            }
        );
        addCase(updateRating.rejected, state => {
            state.flavorRatingLoadingStatus = 'error';
        });
        addDefaultCase(() => {});
    },
});

const { reducer } = flavorsSlice;
export default reducer;
