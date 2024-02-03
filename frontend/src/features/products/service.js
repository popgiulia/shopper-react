import { get } from '../../utils/request-utils';

const PRODUCTS_API_BASE_URL = '/api/products';

const getById = async (requestPayload) => {
    const { id } = requestPayload;
    return get(`${PRODUCTS_API_BASE_URL}/${id}`);
}

const getAllGroupedByType = async (requestPayload) => {
    const { category } = requestPayload;
    return get(`${PRODUCTS_API_BASE_URL}/grouped-by-type?category=${category}`);
}

export const productsService = {
    getById,
    getAllGroupedByType
}