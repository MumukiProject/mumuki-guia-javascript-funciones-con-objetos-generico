Necesitamos una función que nos ayude a calcular la experiencia obtenida de un juego.
Para ello vamos a definir `obtenerExperiencia` que dado un objeto que contenga niveles de experiencia y puntaje por cada nivel, y un objeto con la cantidad de desafíos realizados por cada nivel, devuelva la cantidad total de experiencia obtenida.

```javascript
let puntajes = { EASY: 10, MEDIUM: 50, HARD: 100 };
let desafios = { EASY: 3, MEDIUM: 4, HARD: 2 };

ム obtenerExperiencia(puntajes, desafios)
430 //(3 * 10 + 4 * 50 + 2 * 100)
```

> Definí la función `obtenerExperiencia`.