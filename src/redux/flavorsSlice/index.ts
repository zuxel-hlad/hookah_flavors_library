import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    IFlavorsState,
    IFlavor,
    IUpdateRatingOptions,
} from './flavorsSlice.types';
import {
    getFlavors,
    addFlavor,
    updateRating,
} from './flavorsSlice.async.actions';

const initialState: IFlavorsState = {
    flavors: [],
    flavorsLoadingStatus: 'idle',
    flavorsLoadingErrorMessage: '',
    updateRatingStatus: 'success',
    ratingStatusSnackVisibility: false,
    updateRatingMessage: '',
};

const flavorsSlice = createSlice({
    name: 'flavors',
    initialState,
    reducers: {
        handleCloseRatingSnack: state => {
            state.ratingStatusSnackVisibility = false;
        },
    },
    extraReducers: ({ addCase, addDefaultCase }) => {
        // getFlavors
        addCase(getFlavors.pending, state => {
            state.flavorsLoadingErrorMessage = '';
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
            state.flavorsLoadingErrorMessage =
                'Сталася помилка. Будь ласка оновіть сторінку.';
        });

        // addFlavor
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

        // updateFlavorRating
        addCase(
            updateRating.fulfilled,
            (
                state,
                { payload: { rating, id } }: PayloadAction<IUpdateRatingOptions>
            ) => {
                state.flavors = state.flavors.map(flavor => {
                    if (flavor.id === id) {
                        return {
                            ...flavor,
                            rating,
                        };
                    }
                    return flavor;
                });
                state.updateRatingStatus = 'success';
                state.updateRatingMessage = `Рейтинг успішно змінено на ${rating}`;
                state.ratingStatusSnackVisibility = true;
            }
        );
        addCase(updateRating.rejected, state => {
            state.updateRatingStatus = 'error';
            state.updateRatingMessage =
                'Сталася помилка. Оновіть сторінку і спробуйте ще.';
            state.ratingStatusSnackVisibility = true;
        });
        addDefaultCase(() => {});
    },
});

const { reducer, actions } = flavorsSlice;
export const { handleCloseRatingSnack } = actions;
export default reducer;
