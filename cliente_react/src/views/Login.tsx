import { Form } from "react-router-dom"

export default function Login() 
{
    return(
        <>
            <div className="container-xxl">
                <div className="authentication-wrapper authentication-basic container-p-y">
                    <div className="authentication-inner">                        
                        <div className="card px-sm-2 px-0">
                            <div className="card-body">                                            
                                <p className="app-brand-text demo card-title fw-bold text-primary mb-3">Automotora Don Juanito</p>              

                                <Form id="formAuthentication" className="mb-6" action="index.html">
                                    <div className="mb-4">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="emailUsuario"
                                        placeholder="donpepe@example.com"/>
                                    </div>
                                    <div className="mb-6 form-password-toggle">
                                        <label className="form-label" htmlFor="password">Contraseña</label>
                                        <div className="input-group input-group-merge">
                                        <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                        aria-describedby="password" />                                        
                                        </div>
                                    </div>                
                                    <div className="mb-6">
                                        <button className="btn btn-primary d-grid w-100" type="submit">Login</button>
                                    </div>
                                </Form>              
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    )
}