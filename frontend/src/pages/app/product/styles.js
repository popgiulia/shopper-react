import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaCartPlus } from 'react-icons/fa';

export const Main = styled('main')({
    backgroundColor: "#f2f2f7",
    minHeight: "100vh",
    padding: 'calc(64px + 30px) 30px 30px 30px',
    display: 'flex',
    justifyContent: 'center',
});

export const MainContainer = styled('div')({
    display: "flex",
    width: "100%",
    maxWidth: "1200px",
    justifyContent: "space-between",
    height: "650px",
    gap: "20px",
})

export const ImageWrapper = styled('div')({
    width: "40%",
    height: "100%",
})

export const Image = styled('img')({
    width: "100%",
    height: "100%",
    objectFit: "cover",
})

export const DetailsContainer = styled('div')({
    width: "60%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    backgroundColor: "#fff",
    height: "fit-content",
})

export const Title = styled('h2')({
})

export const PriceText = styled('p')({
})

export const PriceValue = styled('span')({
    color: "#9c0000",
    fontWeight: "700",
    fontSize: "20px",
})

export const Description = styled('p')({
    color: "#777f85",
})

export const SizesContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
})

export const SizeText = styled('span')({
    fontSize: "18px"
})

export const ButtonsContainer = styled('div')({
    display: "flex",
    gap: "10px",
})

export const SizeButton = styled(Button, { shouldForwardProp: (prop) => prop !== 'active' })(({ active }) => ({
    backgroundColor: active ? "#9c0000" : "#3b3b3b",
    fontSize: "11px",
    "&:hover": {
        backgroundColor: "#9c0000",
    },
}))

export const AddToCartButtonWrapper = styled('div')({
})

export const AddToCartButton = styled(Button)({
    backgroundColor: "#9c0000",
    fontSize: "12px",
    lineHeight: "1",
    padding: "10px 15px",
    "&:hover": {
        backgroundColor: "#b30000",
    },
    "& .MuiButton-startIcon svg": {
        fontSize: "16px",
    }
})