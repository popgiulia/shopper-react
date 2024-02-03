import { showToastr } from './slice';

const middleware = store => next => action => {
    const result = next(action);

    const actions = [
        'auth/register/fulfilled',
        'auth/register/rejected',
        'auth/login/fulfilled',
        'auth/login/rejected',
        'auth/logout/fulfilled',
        'auth/logout/rejected',
        'cart/addToCart'
    ];

    console.log(action.payload);
    console.log(action.type);

    if (actions.includes(action.type)) {
        store.dispatch(
            showToastr({
                message: action.payload.message,
                severity: action.payload.severity
            })
        );
    }

    return result;
};

export default middleware;