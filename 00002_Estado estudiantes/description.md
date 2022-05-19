Estamos diseñando un nuevo sistema para una facultad, y tenemos la información de las materias para cada estudiante en objetos donde cada propiedad es una materia que contiene un array con las notas de los resultados de los parciales. Por ejemplo:

```js
let materiasAda = {
  matematica: [10, 6, 10, 8],
  algoritmos: [10, 10, 9],
  algebra: [7, 9]
};

let materiasGrace = {
  matematica: [2, 9, 10, 7],
  algoritmos: [7, 1, 9],
  algebra: [2, 3]
};
```

- Nos pidieron generar un informe que muestre las materias aprobadas (promedio de notas >= 4) y desaprobadas (promedio de notas < 4);
- para implementar este reporte, tenemos que definir una función que tome un objeto con las materias y sus notas, y nos retorne un objeto con dos propiedades: `aprobadas` y `desaprobadas`;
- cada propiedad es un array que contiene el nombre de las materias que aprobaron o desaprobaron respectivamente.

```js
ム agruparMateriasPorEstado(materiasAda)
{ aprobadas: ['matematica', 'algoritmos', 'algebra'], desaprobadas: [] }


ム agruparMateriasPorEstado(materiasGrace)
{ aprobadas: ['matematica', 'algoritmos'], desaprobadas: ['algebra'] }
```

> Definí la función `agruparMateriasPorEstado` y las funciones auxiliares necesarias para lograr el comportamiento que acabamos de describir.