import {
    get,
    post,
} from '../../utils/request-utils';

const AUTH_API_BASE_URL = '/auth';

const register = async (requestPayload) => {
    return post(`${AUTH_API_BASE_URL}/register`, requestPayload);
}

const login = async (requestPayload) => {
    return post(`${AUTH_API_BASE_URL}/login`, requestPayload);
}

const getLoggedUser = async () => {
    return get(`${AUTH_API_BASE_URL}/user`);
}

const logout = () => {
    return get(`${AUTH_API_BASE_URL}/logout`);
}

export const authService = {
    register,
    login,
    logout,
    getLoggedUser
}