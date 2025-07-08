import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home, {loader as loaderArriendosActivos} from './views/Home';
import RegistrarArriendo, {action as actionIngresarArriendo} from './views/RegistrarArriendo';
import CrearUsuario from './views/CrearUsuario';
import CambiarContrasenna from "./views/CambiarContrasenna";
import ArriendosTerminados, {loader as loaderArriendosTerminados} from "./views/ArriendosTerminados";
import Loader from "./components/Loader";
import ArriendosPorTipo, {loader as loaderArriendosPorTipo} from "./views/ArriendosPorTipo";
import Login, {action as actionLogin } from "./views/Login";
import { PrivateRoute } from "./components/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>,
        action: actionLogin,
    },
    {
        path: "/",
        element: <Layout/>,
        HydrateFallback: Loader,
        children:[
                    {
                        element: <PrivateRoute/>,
                        children: [
                        {
                            index:true,
                            element:<Home />,
                            loader: loaderArriendosActivos,
                        },
                        {
                            path: 'arriendos/tipos',
                            element:<ArriendosPorTipo/>,
                            loader: loaderArriendosPorTipo,                
                        },
                        {
                            path: 'arriendos/terminados',
                            element:<ArriendosTerminados/>,
                            loader: loaderArriendosTerminados,
                        },
                        {
                            path: 'arriendos/registrar',
                            element: <RegistrarArriendo />,
                            action: actionIngresarArriendo,
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
        ]
    }
])
