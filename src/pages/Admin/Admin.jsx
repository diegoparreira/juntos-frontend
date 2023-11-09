// import ResponsiveAppBar from '../../components/ResponsiveAppBar';

import AdminOptions from "../../components/AdminOptions";
import NavbarApp from "../../components/Navbar";
import { useUser } from "../../context/UserContext";

export default function Admin() {
    const {user} = useUser();

    return(
        <>
            <NavbarApp />
            <AdminOptions />
        </>        
    )
}