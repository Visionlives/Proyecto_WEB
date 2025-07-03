import { Outlet } from "react-router-dom";
import NavBarLateral from "../components/NavBarLateral";
//import PiePagina from "../components/PiePagina";

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