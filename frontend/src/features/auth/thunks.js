import { severity } from '../../constants/severity-constants';
import { authService } from './service';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { localStorageSetItem } from '../../utils/local-storage-utils';
import { LOGOUT_SUCCESS_MESSAGE } from '../../constants/auth-constants';

export const register = createAsyncThunk(
    'auth/register',
    async (requestPayload, { rejectWithValue }) => {
        const response = await authService.register(requestPayload);

        const responsePayload = await response.json();

        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(responsePayload);
        }

        return responsePayload;
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (requestPayload, { rejectWithValue }) => {
        const responseLogin = await authService.login(requestPayload);
        const responseLoginPayload = await responseLogin.json();

        if (responseLogin.status < 200 || responseLogin.status >= 300) {
            return rejectWithValue(responseLoginPayload);
        }

        const responseGetLoggedUser = await authService.getLoggedUser();
        const responseGetLoggedUserPayload = await responseGetLoggedUser.json();

        if (responseGetLoggedUser.status < 200 || responseGetLoggedUser.status >= 300) {
            return rejectWithValue(responseGetLoggedUserPayload);
        }

        localStorageSetItem('user', { ...responseGetLoggedUserPayload });

        console.log(responseLoginPayload);

        return {
            ...responseLoginPayload,
            user: responseGetLoggedUserPayload
        };
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        const response = await authService.logout();

        if (response.status < 200 || response.status >= 300) {
            const responsePayload = await response.json();
            return rejectWithValue(responsePayload);
        }

        localStorage.removeItem('user');

        return {
            message: LOGOUT_SUCCESS_MESSAGE,
            severity: severity.success
        };
    }
)