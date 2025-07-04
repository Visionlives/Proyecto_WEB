import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from './views/Home';
import RegistrarArriendo from './views/RegistrarArriendo';
import CrearUsuario from './views/CrearUsuario';
import CambiarContrasenna from "./views/CambiarContrasenna";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                index:true,
                element:<Home />,
            },
            {
                path: 'registrar',
                element: <RegistrarArriendo />
            },
            {
                path: 'usuario/crear',
                element: <CrearUsuario />
            },
            {
                path: 'usuario/editar',
                element: <CambiarContrasenna />
            }            
        ]
    }
])