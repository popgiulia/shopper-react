import { hideToastr } from '../../features/toastr/slice';
import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

function Toastr() {
    const dispatch = useDispatch();

    const { open, message, severity } = useSelector(state => state.toastr);

    const handleClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(hideToastr());
    };

    if (!open || !message || !severity) {
        return null;
    }

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
            autoHideDuration={5000}
        >
            <Alert onClose={handleClose} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default Toastr;