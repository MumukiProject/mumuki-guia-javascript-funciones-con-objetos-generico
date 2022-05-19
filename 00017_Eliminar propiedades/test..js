describe("", function() {
  it("Si hacemos removerPropiedades({ a: 1, b: 2, c: 3 }, ['c']), nos retorna {a: 1, b: 2}", function() {
   let data = { a: 1, b: 2, c: 3 };
   let propiedades = ['c'];
   let resultado = removerPropiedades(data, propiedades)
    assert.deepEqual(resultado, {a: 1, b: 2});
  })
});

describe("", function() {
  it("Si hacemos removerPropiedades({ a: 10, b: 5, c: 8 }, ['a','c']), nos retorna {b: 2}", function() {
   let data = { a: 1, b: 2, c: 3 };
   let propiedades = ['a','c'];
   let resultado = removerPropiedades(data, propiedades)
    assert.deepEqual(resultado, {b: 2});
  })
});