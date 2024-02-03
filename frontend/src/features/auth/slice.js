import initialState from './state';
import { status } from '../../constants/status-constants';
import { createSlice } from '@reduxjs/toolkit';
import {
    login,
    logout,
    register
} from './thunks';

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state, { payload }) => {
            state.statuses[payload] = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.statuses.register = status.pending;
            })
            .addCase(register.fulfilled, (state) => {
                state.statuses.register = status.fulfilled;
            })
            .addCase(register.rejected, (state) => {
                state.statuses.register = status.rejected;
            })
            .addCase(login.pending, (state) => {
                state.statuses.login = status.pending;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.statuses.login = status.fulfilled;
            })
            .addCase(login.rejected, (state) => {
                state.statuses.login = status.rejected;
            })
            .addCase(logout.pending, (state) => {
                state.statuses.logout = status.pending;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.statuses.logout = status.fulfilled
            })
            .addCase(logout.rejected, (state) => {
                state.statuses.logout = status.rejected;
            })
    }
})

export const selectStatusByFunctionality = (state, functionality) => state.auth.statuses[functionality];

export const { reset } = authSlice.actions;
export default authSlice.reducer;