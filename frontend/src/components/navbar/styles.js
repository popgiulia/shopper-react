import MuiBadge from '@mui/material/Badge';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaShoppingBasket } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

export const Header = styled('header')(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    backgroundColor: "#fff",
    zIndex: "1"
}))

export const Nav = styled('nav')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    color: '#000',
    height: '64px',
})

export const HomeLink = styled(RouterLink)({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    textDecoration: 'none'
})

export const LogoIcon = styled(FaShoppingBasket)({
    fontSize: "24px",
    color: '#000'
})

export const LogoText = styled('h3')({
    fontSize: "22px",
    fontWeight: "500",
    color: '#000'
})

export const LinksList = styled('ul')({
    display: 'flex',
    alignItems: 'center',
    listStyleType: 'none',
    gap: '20px',
})

export const LinkItem = styled('li')({
})

export const Link = styled(RouterLink)({
    textDecoration: 'none',
    color: '#000',
})

export const ActionsContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
})

export const Badge = styled(MuiBadge)({
    "& .MuiBadge-badge": {
        backgroundColor: "#9c0000"
    }
})

export const StyledButton = styled(Button)({
    width: "110px",
    fontSize: "11px",
    backgroundColor: "#3b3b3b",
    "&:hover": {
        backgroundColor: "#5b5b5b",
    },
})

export const RegisterButton = styled(StyledButton)({
})

export const LoginButton = styled(StyledButton)({
})

export const LogoutButton = styled(StyledButton)({
})