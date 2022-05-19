Necesitamos una función que acepte dos combatientes. Cada combatiente debe tener: nombre, vida, defensa y ataque. Por ronda, se atacan una vez cada uno, usando la siguiente fórmula: `daño = ataque del atacante - defensa del atacado` y restando a la vida el daño generado. La batalla termina cuando la vida de cualquiera llegue a 0 o menos. 

```javascript
let combatienteA = { nombre: "Chun-Li", vida: 100, ataque: 40, defensa: 10 };
let combatienteB = { nombre: "Cammy", vida: 50, ataque: 20, defensa: 20 };

ム pelea(combatienteA, combatienteB);
{ rondas: 3, gano: "Chun-Li"}
```
> Definí la función `pelea` que retorne un objeto que indique la cantidad de rondas y quién ganó.