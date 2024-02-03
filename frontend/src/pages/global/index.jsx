import Navbar from "../../components/navbar";
import Toastr from "../../components/toastr";
import { Outlet } from "react-router-dom";

function Global() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Toastr />
        </>
    )
}

export default Global;