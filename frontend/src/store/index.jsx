import authReducer from '../features/auth/slice';
import cartReducer from '../features/cart/slice';
import toastrReducer from '../features/toastr/slice';
import productsReducer from '../features/products/slice';
import toastrMiddleware from '../features/toastr/middleware';
import {
    configureStore,
    combineReducers
} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    toastr: toastrReducer,
    products: productsReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware:
        (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(toastrMiddleware)
})


export default store;