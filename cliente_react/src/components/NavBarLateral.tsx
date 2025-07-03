export default function NavBarLateral(){
    return(
        // AQUI VA EL HTML DE LA NAVBAR LATERAL
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <a href="index.html" className="app-brand-link">
                    <span className="app-brand-text demo menu-text fw-bold">Don Juanito</span>
                </a>
            </div>

            <ul className="menu-inner py-1">            
                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-dock-top"></i>
                        <div className="text-truncate" data-i18n="Account Settings">Arriendos</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="pages-account-settings-connections.html" className="menu-link">
                                <div className="text-truncate" data-i18n="Connections">Registrar</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="pages-account-settings-connections.html" className="menu-link">
                                <div className="text-truncate" data-i18n="Connections">Devoluciones</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="pages-account-settings-notifications.html" className="menu-link">
                                <div className="text-truncate" data-i18n="Notifications">Eliminar</div>
                            </a>
                        </li>                
                    </ul>
                </li>            

                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-dock-top"></i>
                        <div className="text-truncate" data-i18n="Account Settings">Usuario</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="editarUsuario.html" className="menu-link">
                                <div className="text-truncate" data-i18n="Account">Editar Usuario</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="crearUsuario.html" className="menu-link">
                                <div className="text-truncate" data-i18n="Notifications">Crear Usuario</div>
                            </a>
                        </li>                        
                    </ul>
                </li>                                        
            </ul>
        </aside>                
    )
}