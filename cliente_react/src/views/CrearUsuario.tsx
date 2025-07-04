export default function CrearUsuario() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes acceder a los datos del formulario y hacer lo que necesites
    // Por ejemplo: enviar a una API, mostrar un mensaje, etc.
    };
    return ( 
        <>
            <div className="container-xxl flex-grow-1 container-p-y">                  
              <div className="card mb-6">                
                <div className="card-body pt-4">
                  <h5 className="card-title text-primary mb-3">Ingresa los datos para crear un nuevo usuario</h5>
                  <form id="formAccountSettings" method="POST" onSubmit={handleSubmit}>
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
                      <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input className="form-control" type="password" id="password" name="password" />
                      </div>                                                                                                                       
                    </div>
                    <div className="mt-6">
                      <button type="submit" className="btn btn-primary me-3">Crear cuenta</button>                      
                    </div>
                  </form>
                </div>
              </div>                  
            </div>
        </>
    )
}