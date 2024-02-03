import { url } from '../../constants/url-constants';
import { routes } from '../../constants/route-constants';
import { useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import {
    Tooltip,
    IconButton
} from '@mui/material';
import {
    Nav,
    Link,
    Badge,
    Header,
    LogoText,
    HomeLink,
    LinkItem,
    LogoIcon,
    LinksList,
    LoginButton,
    RegisterButton,
    ActionsContainer,
    LogoutButton,
} from './styles';
import { useSelector } from 'react-redux';

function Navbar() {
    console.log('RENDER NAVBAR COMPONENT')

    const user = useSelector(state => state.auth.user);

    const navigate = useNavigate();

    const products = useSelector(state => state.cart.products);

    const handleClickRegisterButton = () => {
        navigate(routes.register);
    }

    const handleClickLoginButton = () => {
        navigate(routes.login);
    }

    const handleClickLogoutButton = () => {
        navigate(routes.logout);
    }

    const handleClickCartButton = () => {
        navigate(routes.cart);
    }

    return (
        <Header>
            <Nav>
                <HomeLink to={routes.home}>
                    <LogoIcon />
                    <LogoText>Shopper</LogoText>
                </HomeLink>
                <LinksList>
                    <LinkItem>
                        <Link to={url.productsMale}>Male</Link>
                    </LinkItem>
                    <LinkItem>
                        <Link to={url.productsFemale}>Female</Link>
                    </LinkItem>
                    <LinkItem>
                        <Link to={url.productsKids}>Kids</Link>
                    </LinkItem>
                </LinksList>
                <ActionsContainer>
                    {
                        user ?
                            (
                                <LogoutButton variant="contained" onClick={handleClickLogoutButton}>Logout</LogoutButton>
                            )
                            :
                            (
                                <>
                                    <RegisterButton variant="contained" onClick={handleClickRegisterButton}>Register</RegisterButton>
                                    <LoginButton variant="contained" onClick={handleClickLoginButton}>Login</LoginButton>
                                </>
                            )
                    }

                    <Tooltip arrow title='Shopping cart'>
                        <IconButton
                            size='medium'
                            edge='end'
                            color='inherit'
                            onClick={handleClickCartButton}
                        >
                            <Badge color='error' badgeContent={products.length}>
                                <MdOutlineShoppingCart />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                </ActionsContainer>
            </Nav>
        </Header >
    )
}

export default Navbar;