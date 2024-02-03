import Cart from '../pages/app/cart';
import Login from '../pages/auth/login';
import Global from '../pages/global';
import Logout from '../pages/auth/logout';
import Product from '../pages/app/product';
import Products from '../pages/app/products';
import Register from '../pages/auth/register';
import { routes } from '../constants/route-constants';
import {
    Route,
    Routes,
    BrowserRouter
} from 'react-router-dom';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.global} element={<Global />}>
                    <Route path={routes.home} element={<Products />} />
                    <Route path={routes.cart} element={<Cart />} />
                    <Route path={routes.login} element={<Login />} />
                    <Route path={routes.product} element={<Product />} />
                    <Route path={routes.products} element={<Products />} />
                    <Route path={routes.register} element={<Register />} />
                    <Route path={routes.logout} element={<Logout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;