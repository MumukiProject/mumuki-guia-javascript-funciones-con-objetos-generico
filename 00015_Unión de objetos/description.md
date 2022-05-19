Queremos una función que nos ayude a _mergear_ dos objetos. La misma debe recibir por parámetro los dos objetos a _mergear_ y retornar la unión de los mismos, de manera tal que contenga las propiedades de ambos. Para aquellas propiedades que están compartidas, como un objeto no puede tener propiedades repetidas, se debe priorizar el objeto del primer parámetro.

```javascript
let info1 = { a: 1, b: 2, c: 3 };
let info2 = { d: 4, b: 5 };

ム merge(info1, info2);
{a: 1, b: 2, c: 3, d: 4}
```

> Definí la función `merge` para lograr el comportamiento que acabamos de describir.