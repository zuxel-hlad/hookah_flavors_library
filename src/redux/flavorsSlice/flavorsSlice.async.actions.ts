import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    IFlavor,
    IUpdateRatingOptions,
    IAddNewFlavor,
} from './flavorsSlice.types';
import useHttp from '../../hooks/http.hook';

const BASE_URL = 'https://shop-app-6c9a6-default-rtdb.firebaseio.com';

export const getFlavors = createAsyncThunk(
    'flavors/fetchAllFlavors',
    async () => {
        const { request } = useHttp();
        const flavors = await request<IFlavor[]>(`${BASE_URL}/flavors.json`);
        return Object.keys(flavors).map(flavor => ({
            ...flavors[flavor],
            id: flavor,
        }));
    }
);

export const addFlavor = createAsyncThunk(
    'flavors/addFlavor',
    async (flavor: IFlavor) => {
        const { request } = useHttp();
        const { name } = await request<IAddNewFlavor>(
            `${BASE_URL}/flavors.json`,
            'POST',
            JSON.stringify(flavor)
        );

        return {
            ...flavor,
            id: name,
        };
    }
);

export const updateRating = createAsyncThunk(
    'flavors/updateRating',
    async (options: IUpdateRatingOptions) => {
        const { id, rating } = options;
        const { request } = useHttp();
        const { rating: newRating } = await request<
            Omit<IUpdateRatingOptions, 'id'>
        >(
            `${BASE_URL}/flavors/${id}.json`,
            'PATCH',
            JSON.stringify({ rating })
        );

        return {
            rating: newRating,
            id,
        };
    }
);
