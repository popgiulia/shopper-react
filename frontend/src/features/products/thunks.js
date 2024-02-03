import { productsService } from './service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllProductsGroupedByType = createAsyncThunk(
    'products/get-all-grouped-by-type',
    async (requestPayload, { rejectWithValue }) => {
        const response = await productsService.getAllGroupedByType(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const getProductById = createAsyncThunk(
    'products/get-by-id',
    async (requestPayload, { rejectWithValue }) => {
        const response = await productsService.getById(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)