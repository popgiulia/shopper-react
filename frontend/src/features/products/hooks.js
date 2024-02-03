import { status } from "../../constants/status-constants";
import { useEffect } from "react";
import { productsFunctionality } from "../../constants/products-functionality-constants";
import {
    useSelector,
    useDispatch
} from "react-redux";
import {
    getProductById,
    getAllProductsGroupedByType
} from "./thunks";
import {
    selectStatusByFunctionality,
    selectMessageByFunctionality,
    selectSeverityByFunctionality
} from "./slice";

const useStatus = (functionality) => {
    const statusByFunc = useSelector((state) => selectStatusByFunctionality(state, functionality));
    const messageByFunc = useSelector((state) => selectMessageByFunctionality(state, functionality));
    const severityByFunc = useSelector((state) => selectSeverityByFunctionality(state, functionality));

    const isError = statusByFunc === status.rejected;
    const isLoading = statusByFunc === status.pending;
    const isSuccess = statusByFunc === status.fulfilled;

    return { isLoading, isError, isSuccess, messageByFunc, severityByFunc };
};

export const useGetAllProductsGroupedByType = (category) => {
    category = category ?? 'male';

    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.products);
    const { isLoading } = useStatus(productsFunctionality.getAllGroupedByType);

    useEffect(() => {
        dispatch(getAllProductsGroupedByType({ category }));
    }, [category]);

    return { products, isLoading };
}

export const useGetProductById = (id) => {
    const dispatch = useDispatch();

    const product = useSelector((state) => state.products.product);
    const { isLoading } = useStatus(productsFunctionality.getById);

    useEffect(() => {
        dispatch(getProductById({ id }));
    }, [id]);

    return { product, isLoading };
}