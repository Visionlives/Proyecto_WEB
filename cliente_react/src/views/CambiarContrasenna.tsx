export default function CambiarContrasenna() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes acceder a los datos del formulario y hacer lo que necesites
    // Por ejemplo: enviar a una API, mostrar un mensaje, etc.

    /*Id:
      Contraseña actual: passwordActual
      Nueva contraseña: passwordNueva
      Confirmar nueva contraseña: passwordNuevaConf
    */
    };
    return ( 
        <>
            <div className="container-xxl flex-grow-1 container-p-y">                  
              <div className="card mb-6">                
                <div className="card-body pt-4">
                  <h5 className="card-title text-primary mb-3">Ingresa tu nueva contraseña</h5>
                  <form id="formAccountSettings" method="POST" onSubmit={handleSubmit}>
                    <div className="row g-6">                         
                      <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Contraseña actual</label>
                        <input className="form-control" type="password" id="passwordActual" name="password" />
                      </div>                                                                          
                      <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Nueva contraseña</label>
                        <input className="form-control" type="password" id="passwordNueva" name="password" />
                      </div>   
                      <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Confirma nueva contraseña</label>
                        <input className="form-control" type="password" id="passwordNuevaConf" name="password" />
                      </div>                                                                                                                       
                    </div>
                    <div className="mt-6">
                      <button type="submit" className="btn btn-primary me-3">Confirmar</button>                      
                    </div>
                  </form>
                </div>
              </div>                  
            </div>
        </>
    )
}