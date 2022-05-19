describe("", function() {
  let caja1 = { width: 4, length: 8, height: 5};
  it("Si hacemos volumenCaja de una caja que tiene width: 4, length: 8, height: 5, nos retorna 160", function() {
    let resultado = volumenCaja(caja1);
    assert.equal(resultado, 160);
  })
});

describe("", function() {
  let caja2 = { width: 2, length: 5, height: 1};
  it("Si hacemos volumenCaja de una caja que tiene width: 2, length: 5, height: 1, nos retorna 10", function() {
    let resultado = volumenCaja(caja2);
    assert.equal(resultado, 10);
  })
});

describe("", function() {
  let caja3 = { width: 10, length: 10, height: 10};
  it("Si hacemos volumenCaja de una caja que tiene width: 10, length: 10, height: 10, nos retorna 1000", function() {
    let resultado = volumenCaja(caja3);
    assert.equal(resultado, 1000);
  })
});