import { Outlet } from "react-router-dom";
import NavBarLateral from "../components/NavBarLateral";

export default function Layout(){
    return(
        <>
            {/* HTML DE LA NAVBAR LATERAL */}
            <NavBarLateral/>

            {/* CONTENIDO PRINCIPAL */}
            <main className="container-fluid">
                {/* CONTENIDO DINAMICO */}
                <Outlet/> 
            </main>
        </>
    )
}