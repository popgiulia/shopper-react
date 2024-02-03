import { requestContent } from "../constants/request-constants";

export const get = async (uri) => {
    const requestInit = {
        method: 'GET',
        credentials: 'include'
    }

    return await fetch(uri, requestInit);
}

export const post = async (uri, data) => {
    const requestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    }

    return await fetch(uri, requestInit);
}

export const put = async (uri, data, contentType = requestContent.Json) => {
    const requestInit = {
        method: 'PUT'
    }

    if (contentType === requestContent.Json) {
        requestInit.headers = {
            'Content-Type': 'application/json'
        }
        requestInit.body = JSON.stringify(data);
    }
    else {
        requestInit.body = data;
    }

    return await fetch(uri, requestInit);
}