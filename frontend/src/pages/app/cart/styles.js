import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

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
    gap: "20px",
    height: "fit-content",
})

export const CartContainer = styled('div')({
    width: "60%",
    height: "100%",
    backgroundColor: "#fff",
    height: "fit-content",
    color: "777f85",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "24px"
})

export const CardsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
})

export const PaymentContainer = styled('div')({
    width: "40%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "32px",
    backgroundColor: "#fff",
    height: "fit-content",
})

export const CartTitle = styled('h2')({
})

export const PaymentTitle = styled('h2')({
})

export const TotalContainer = styled('div')({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})

export const TotalText = styled('p')({
    fontSize: "18px",
    fontWeight: "700"
})

export const TotalValue = styled('span')({
    color: "#9c0000",
    fontWeight: "700",
    fontSize: "20px",
})

export const SendButtonWrapper = styled('div')({
    display: "flex"
})

export const SendButton = styled(Button)({
    width: "100%",
    fontSize: "11px",
    backgroundColor: "#9c0000",
    "&:hover": {
        backgroundColor: "#b30000",
    }
})