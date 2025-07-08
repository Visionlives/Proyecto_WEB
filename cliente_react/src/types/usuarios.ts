import { nonEmpty, object, pipe, string, maxLength, custom, email, minLength } from "valibot";

export const LoginFormSchema = object
(
    {
      email: pipe(string(), nonEmpty('El email no puede estar vacio'), email('Correo no valido.'), maxLength(50, 'El correo no puede contener más de 50 digitos')),  
      password: pipe(string(), nonEmpty('La contraseña no puede estar vacia'), minLength(6, 'La contraseña no puede tener menos de 6 caracteres'), maxLength(60, 'La contraseña no puede contener más de 60 digitos')),  
    }
);

// export const CambioContraseñaSchema = object //O CambioContraseñaUsuarioSchema? 
// (
//     {
//         contrasennaActual: pipe(string(), nonEmpty('La contraseña no puede estar vacia')),  
//         contrasennaNueva: pipe(string(), nonEmpty('La contraseña no puede estar vacia'), maxLength(6, 'La nueva contraseña no puede contener más de X digitos')),  
//         contrasennadNuevaConf: pipe(string(), )
//     }
// );

// Es primero pipe, para validar entre campos
export const CambioContraseñaSchema = pipe(
  object(
    {
      contrasennaActual: pipe(string(), nonEmpty('La contraseña no puede estar vacía'), minLength(6, 'La contraseña no puede tener menos de 6 caracteres')),
      contrasennaNueva: pipe(string(), nonEmpty('La contraseña no puede estar vacía'), minLength(6, 'La contraseña no puede tener menos de 6 caracteres'), maxLength(60, 'La nueva contraseña no puede contener más de 100 dígitos')),
      contrasennadNuevaConf: pipe(string(), nonEmpty('La confirmación no puede estar vacía')),
    }),
  custom(
    (data) => 
    {
        const d = data as { contrasennaNueva: string; contrasennadNuevaConf: string };
        return d.contrasennaNueva === d.contrasennadNuevaConf;
    },
    'La confirmación de la contraseña no coincide'
    )
);