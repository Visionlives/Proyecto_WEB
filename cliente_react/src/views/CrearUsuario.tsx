import { useRef } from "react";
import {Form} from "react-router-dom";

export default function CrearUsuario() {
    const formRef = useRef<HTMLFormElement | null>(null) ;
    const handleReset = () => 
    {
      formRef.current?.reset();
    }

    return ( 
        <>
            <div className="container-xxl flex-grow-1 container-p-y">                  
              <div className="card mb-6">                
                <div className="card-body pt-4">
                  <h5 className="card-title text-primary mb-3">Ingresa los datos para crear un nuevo usuario</h5>
                  <Form id="formAccountSettings" method="POST" ref={formRef}>
                    <div className="row g-6">                         
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                          className="form-control"
                          type="text"
                          id="email"
                          name="email"                              
                          placeholder="don.juanito@example.com" />
                      </div>                                                                          
                      {/* eliminar/ver despues
                      <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input className="form-control" type="password" id="password" name="password" />
                        <span className="input-group-text cursor-pointer"><i className="icon-base bx bx-hide"></i></span>
                      </div>*/}
                      <div className="col-md-6 form-password-toggle">
                          <label className="form-label" htmlFor="password">Contraseña</label>
                          <div className="input-group input-group-merge">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              name="password"
                              placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                              aria-describedby="password" />
                            <span className="input-group-text cursor-pointer"><i className="icon-base bx bx-hide"></i></span>
                            </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button type="submit" className="btn btn-primary me-3">Crear cuenta</button>
                      <button type="button" className="btn btn-primary me-3" onClick={handleReset}>Restablecer</button>                    
                    </div>
                  </Form>
                </div>
              </div>                  
            </div>
        </>
    )
}