describe("", function() {
  let resultado = obtenerInfoString('H3ll0 Wor1d');
  it("Si hacemos obtenerInfoString('H3ll0 Wor1d') la cantidad de letras es 7", function() {
    assert.equal(resultado.letras, 7);
  })
  it("Si hacemos obtenerInfoString('H3ll0 Wor1d') la cantidad de digitos es 3", function() {
    assert.equal(resultado.digitos, 3);
  })
  it("Si hacemos obtenerInfoString('H3ll0 Wor1d') la cantidad de espacios es 1", function() {
    assert.equal(resultado.espacios, 1);
  })
});

describe("", function() {
  let resultado = obtenerInfoString('H0L4 4D4, B1ENV3N1D4');
  it("Si hacemos obtenerInfoString('H0L4 4D4, B1ENV3N1D4') la cantidad de letras es 10", function() {
    assert.equal(resultado.letras, 10);
  })
  it("Si hacemos obtenerInfoString('H0L4 4D4, B1ENV3N1D4') la cantidad de digítos es 8", function() {
    assert.equal(resultado.digitos, 8);
  })
  it("Si hacemos obtenerInfoString('H0L4 4D4, B1ENV3N1D4') la cantidad de espacios es 2", function() {
    assert.equal(resultado.espacios, 2);
  })
});
