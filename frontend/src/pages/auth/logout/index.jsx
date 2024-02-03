import { useLogoutHook } from '../../../features/auth/hooks';

function Logout() {
    console.log('RENDER LOGOUT PAGE');

    useLogoutHook();

    return (
        <>
            Loading...
        </>
    )
}

export default Logout;