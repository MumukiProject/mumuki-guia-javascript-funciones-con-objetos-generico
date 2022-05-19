Necesitamos una función que tome por parámetro un objeto y un array con strings, y devuelva el objeto con solo las propiedades especificadas en el array.

```javascript
let data = { a: 1, b: 2, c: 3 };
let props = ["c", "b"];
ム filtrarPropiedades(data, props);
{b: 2, c: 3}
```

> Definí la función `filtrarPropiedades` para lograr el comportamiento que acabamos de describir.