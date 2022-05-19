Necesitamos obtener el nombre y apellido de una persona con la información de perfil en Gmail.
Para ello vamos a definir una función `obtenerNombreCompleto` que reciba un objeto como argumento (con las mismas propiedades que el objeto que tenemos guardado en `persona`) y nos devuelva un string con el nombre completo (nombre + apellido)

```js
let persona = {
  nombre: 'Grace',
  apellido: 'Hopper',
  email: 'grace.hopper@gmail.com',
  plan: 'premium'
};

ム obtenerNombreCompleto(persona);
Grace Hopper
```

> Definí la función `obtenerNombreCompleto`.