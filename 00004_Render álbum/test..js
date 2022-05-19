describe("", function() {
  let albumNirvana= {
  id: 'nirv1234',
  nombre: 'With The Lights Out',
  anio: 2004,
  genero: 'Grunge',
  banda: 'Nirvana',
  portada: 'https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg',
  info: 'https://en.wikipedia.org/wiki/With_the_Lights_Out'
};
  it("Si tenemos un disco de Nirvana con id = 'nirv1234', al hacer render(albumNirvana), el HTML se renderiza con ese id '", function() {
    let resultado = render(albumNirvana);
    assert(resultado.includes("id='nirv1234'") || resultado.includes(`id="nirv1234"`))
  });
  it("Si tenemos un disco de Nirvana con portada = 'https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg', al hacer render(albumNirvana), el HTML se renderiza con ese src '", function() {
    let resultado = render(albumNirvana);
    assert(resultado.includes("src='https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg'") || resultado.includes(`src="https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg"`))
  });
  it("Si tenemos un disco de Nirvana con genero = 'Grunge', el HTML se renderiza con ese genero", function() {
    let resultado = render(albumNirvana);
    assert(resultado.includes("Grunge") || resultado.includes(`Grunge`));
  })
});

describe("", function() {
  let albumPinkFloyd= {
  id: 'PinkFloyd',
  nombre: 'Wish You Were Here',
  anio: 1975,
  genero: 'Soft Rock',
  banda: 'Pink Floyd',
  portada: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2017/12/whis-you-were-here-foto-original.jpg?resize=670%2C848&ssl=1',
  info: 'https://es.wikipedia.org/wiki/Wish_You_Were_Here'
};
  it("Si tenemos un disco de Pink Floyd con nombre = 'Wish You Were Here', al hacer render(albumPinkFloyd), el HTML se renderiza con ese nombre'", function() {
    let resultado = render(albumPinkFloyd);
    assert(resultado.includes("Wish You Were Here") || resultado.includes(`Wish You Were Here"`))
  });
  it("Si tenemos un disco de Pink Floyd con genero = 'Soft Rock', al hacer render(albumPinkFloyd), el HTML se renderiza con ese genero '", function() {
    let resultado = render(albumPinkFloyd);
    assert(resultado.includes("Soft Rock") || resultado.includes(`Soft Rock`))
  });
  it("Si tenemos un disco de Pink Floyd con info = 'https://es.wikipedia.org/wiki/Wish_You_Were_Here', el HTML se renderiza con esa información", function() {
    let resultado = render(albumPinkFloyd);
    assert(resultado.includes("https://es.wikipedia.org/wiki/Wish_You_Were_Here") || resultado.includes(`https://es.wikipedia.org/wiki/Wish_You_Were_Here`));
  })
});
