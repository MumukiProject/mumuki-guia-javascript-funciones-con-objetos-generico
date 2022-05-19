Para armar el HTML podés utilizar interpolación de strings. Por ejemplo:

```js
let producto = {
  nombre: 'Notebook',
  precio: 123
}

let html = `
  <div class="producto">
    <p>${producto.nombre}</p>
    <small>ARS ${producto.precio}</small>
  </div>
`;
```