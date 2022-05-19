Necesitamos una función que dada una persona y una búsqueda de empleo, devuelva si la persona se ajusta a dicha búsqueda. Ambos objetos tienen la siguiente estructura:

```javascript
let persona = {
  experiencia: 4,
  lenguajes: ["JavaScript", "HTML","CSS"],
  locacion: "Buenos Aires",
  remuneracion: 35000
}

let busqueda = {
  experiencia: 1,
  lenguajes: ["JavaScript", "HTML"],
  locacion: ["Buenos Aires"],
  remuneracion: 40000
}
```

La persona se adecua si:

- cuenta con los años de experiencia necesarios para la búsqueda;
- los lenguajes que conoce son los que contiene la búsqueda (puede conocer más, pero no afecta en nada);
- su locación está incluida dentro de las locaciones posibles de la búsqueda;
- su remuneración (pretendida) es igual o menor a la de la búsqueda.

``` javascript
ム seAdecua(persona, busqueda)
true
```

> Definí la función `seAdecua` para lograr el comportamiento que acabamos de describir.