import { Outlet } from "react-router-dom";
import Nav from "./pages/Nav";

const GeneralLayout = () => {
    return (
        <>
        <Nav />
        <Outlet />
        </>
    )
}

export default GeneralLayout;