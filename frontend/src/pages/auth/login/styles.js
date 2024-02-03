import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Main = styled('main')({
    backgroundColor: "#f2f2f7",
    minHeight: "100vh",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const Form = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    padding: '30px',
    width: '500px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)'
});

export const Title = styled('h2')({
    fontSize: '24px',
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
});

export const InputsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
});

export const InputField = styled(TextField)({
});

export const SubmitButtonWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const SubmitButton = styled(Button)({
    width: "110px",
    fontSize: "11px",
    backgroundColor: "#3b3b3b",
    "&:hover": {
        backgroundColor: "#5b5b5b",
    },
})