Los parámetros de búsqueda en una URL son aquellos que vienen después del signo `?` y se escriben como `parametro=valor`, separados por el signo `&`.

```javascript
ム parsearParametrosDeBusqueda("http://www.exercises.com?palabraClave=objects&lenguaje=javascript&nivel=intermediate");
{ palabraClave: "objetos", lenguaje: "javascript", nivel: "intermedio" }
```

> Definí la función `parsearParametrosDeBusqueda` que dada una URL, devuelva un objeto con cada parámetro como clave con su respectivo valor.