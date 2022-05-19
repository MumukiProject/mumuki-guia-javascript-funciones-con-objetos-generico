Queremos crear un html a partir de un objeto de JavaScript, más especificamente vamos a crear una página que nos permita visualizar discos de Spotify  :minidisc:. Los discos tienen las propiedades: `id` (string), `nombre` (string), `anio` (número), `genero` (array de strings), `banda` (string), `portada` (string) e `info` (string). Por ejemplo:

```js
let albumDeEjemplo = {
  id: 'nirv1234',
  nombre: 'With The Lights Out',
  anio: 2004,
  genero: 'Grunge',
  banda: 'Nirvana',
  portada: 'https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg',
  info: 'https://en.wikipedia.org/wiki/With_the_Lights_Out'
};
```

Para eso definiremos una función `render` que reciba un disco como argumento y genere un HTML de la siguiente forma: 

```
ム render(albumDeEjemplo)
`
<div class="card m-5" id="nirv1234">
  <img class="card-img-top" src="https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg" alt="Nirvana - With The Lights Out" />
  <div class="card-body">
    <h5 class="card-title">Nirvana</h5>
    <p class="card-text">With The Lights Out (2004) | Grunge</p>
    <a href="https://en.wikipedia.org/wiki/With_the_Lights_Out" class="btn btn-primary">https://en.wikipedia.org/wiki/With_the_Lights_Out</a>
  </div>
</div>
`
```

> Definí la función `render`.
