import { NavLink } from "react-router-dom";

export default function NavBarLateral() {
    return (        
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            {/* Arriendos */}
            <div className="app-brand demo">
                <NavLink to="/" className="app-brand-link">
                    <span className="app-brand-text demo menu-text fw-bold">Don Juanito</span>
                </NavLink>
            </div>

            <ul className="menu-inner py-1">
                {/* Arriendos */}
                <li className="menu-item">
                    <div className="menu-link">
                        <div className="text-truncate">Arriendos</div>
                    </div>
                    <NavLink to="arriendos/registrar" className="menu-link" style={{ marginLeft: 32 }}>
                        <div className="text-truncate">Registrar</div>
                    </NavLink>
                    <NavLink to="/arriendos/devoluciones" className="menu-link" style={{ marginLeft: 32 }}>
                        <div className="text-truncate">Devoluciones</div>
                    </NavLink>
                </li>

                {/* Usuario */}
                <li className="menu-item">
                    <div className="menu-link">
                        <div className="text-truncate">Usuario</div>
                    </div>
                    <NavLink to="/usuario/editar" className="menu-link" style={{ marginLeft: 32 }}>
                        <div className="text-truncate">Editar Usuario</div>
                    </NavLink>
                    <NavLink to="/usuario/crear" className="menu-link" style={{ marginLeft: 32 }}>
                        <div className="text-truncate">Crear Usuario</div>
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
}