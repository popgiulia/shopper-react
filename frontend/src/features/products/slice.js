import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './state';
import { getProductById, getAllProductsGroupedByType } from './thunks';

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetProducts: (state) => {
            state = initialState
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProductsGroupedByType.pending, (state) => {
            state.statuses.getAllGroupedByType = 'pending';
        })
        builder.addCase(getAllProductsGroupedByType.fulfilled, (state, { payload }) => {
            state.statuses.getAllGroupedByType = 'fulfilled';
            state.products = payload;
        })
        builder.addCase(getAllProductsGroupedByType.rejected, (state, { payload }) => {
            state.statuses.getAllGroupedByType = 'rejected';
            state.messages.getAllGroupedByType = payload;
            state.severities.getAllGroupedByType = 'error';
        })
        builder.addCase(getProductById.pending, (state) => {
            state.statuses.getById = 'pending';
        })
        builder.addCase(getProductById.fulfilled, (state, { payload }) => {
            state.statuses.getById = 'fulfilled';
            state.product = payload;
        })
        builder.addCase(getProductById.rejected, (state, { payload }) => {
            state.statuses.getById = 'rejected';
            state.messages.getById = payload;
            state.severities.getById = 'error';
        })
    }
})

export const selectStatusByFunctionality = (state, functionality) => state.products.statuses[functionality]
export const selectMessageByFunctionality = (state, functionality) => state.products.messages[functionality]
export const selectSeverityByFunctionality = (state, functionality) => state.products.severities[functionality]

export const { hideToastr, resetToastr, showToastr } = productsSlice.actions;
export default productsSlice.reducer;