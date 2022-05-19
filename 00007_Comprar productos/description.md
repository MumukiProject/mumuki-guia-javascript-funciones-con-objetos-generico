Necesitamos definir una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, devuelva un objeto con dichos productos, teniendo como valor `true` si puede comprarlo o `false` sino.

```javascript
let productos = { cookies: 60, chocolate: 110, soda: 120 };
let dinero = 115;

ム comprarProductos(dinero, productos)
{ cookies: true, chocolate: true, soda: false }
```
> Definí la función `comprarProductos` y las funciones auxiliares necesarias para lograr el comportamiento que acabamos de describir.