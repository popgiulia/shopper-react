import { styled } from '@mui/material/styles';

export const Main = styled('main')({
    backgroundColor: "#f2f2f7",
    minHeight: "100vh",
    padding: 'calc(64px + 30px) 30px 30px 30px',
    display: 'flex',
    justifyContent: 'center',
});

export const SectionsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    width: '100%',
    maxWidth: '1200px',
})

export const Section = styled('section')({
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
});

export const Title = styled('h2')({
});

export const CardsContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '10px'
});