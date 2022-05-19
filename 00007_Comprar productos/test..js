describe("", function() {
  let productos = { mouse: 500, teclado: 1000, monitor: 3000 };
  it("Si hacemos comprarProductos(1500, { mouse: 500, teclado: 1000, monitor: 3000 }, nos retorna { mouse: true, teclado: true, monitor: false }", function() {
    let resultado = comprarProductos(1500, productos);
    assert.deepEqual(resultado, { mouse: true, teclado: true, monitor: false });
  })
});

describe("", function() {
  let productos1 = { remera: 1000, zapatillas: 5000, pantalon: 1500 };
  it("Si hacemos comprarProductos(5000, { remera: 1000, zapatillas: 5000, pantalon: 1500 }, nos retorna { remera: true, zapatillas: true, pantalon: true }", function() {
    let resultado = comprarProductos(5000, productos1);
    assert.deepEqual(resultado, { remera: true, zapatillas: true, pantalon: true });
  })
});

describe("", function() {
  let productos2 = { fideos: 40, salsa: 45, cebolla: 30 };
  it("Si hacemos comprarProductos(40, { fideos: 40, salsa: 45, cebolla: 30 }, nos retorna { fideos: true, salsa: false, cebolla: true }", function() {
    let resultado = comprarProductos(40, productos2);
    assert.deepEqual(resultado, { fideos: true, salsa: false, cebolla: true });
  })
});