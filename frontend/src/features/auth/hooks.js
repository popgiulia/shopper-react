import { url } from '../../constants/url-constants';
import { status } from '../../constants/status-constants';
import { logout } from './thunks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authFunctionality } from '../../constants/auth-functionality-constants';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    reset,
    selectStatusByFunctionality
} from './slice';

const useStatus = (functionality) => {
    const statusByFunc = useSelector((state) => selectStatusByFunctionality(state, functionality));

    const isError = statusByFunc === status.rejected;
    const isLoading = statusByFunc === status.pending;
    const isSuccess = statusByFunc === status.fulfilled;

    return { isLoading, isError, isSuccess };
};

export const useNavigateHook = (isSuccess, isError, successUrl, errorUrl) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess && successUrl) {
            navigate(successUrl);
        } else if (isError && errorUrl) {
            navigate(errorUrl);
        }
    }, [isSuccess, isError, navigate, successUrl, errorUrl]);
}

export const useResetHook = (authFunc, isSuccess, isError) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError || isSuccess) {
            dispatch(reset(authFunc));
        }
    }, [isError, isSuccess, dispatch]);
};

export const useRegisterHook = () => {
    const { isLoading, isSuccess, isError } = useStatus(authFunctionality.register);

    useNavigateHook(isSuccess, isError, url.login);
    useResetHook(authFunctionality.register, isSuccess, isError);

    return { isLoading };
};

export const useLoginHook = () => {
    const { isLoading, isSuccess, isError } = useStatus(authFunctionality.login);

    useNavigateHook(isSuccess, isError, url.productsMale);
    useResetHook(authFunctionality.login, isSuccess, isError);

    return { isLoading };
};

export const useLogoutHook = () => {
    const dispatch = useDispatch();

    console.log('useLogoutHook');

    const { isLoading, isSuccess, isError } = useStatus(authFunctionality.logout);

    useEffect(() => {
        dispatch(logout());
    }, [dispatch]);

    useNavigateHook(isSuccess, isError, url.login, url.login);
    useResetHook(authFunctionality.logout, isSuccess, isError);

    return { isLoading };
}