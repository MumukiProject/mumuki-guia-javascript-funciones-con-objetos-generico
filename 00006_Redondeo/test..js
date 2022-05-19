describe("", function() {
  it("Si hacemos redondear(8.4) nos devuelve { floor: 8, ceil: 9, round: 8 }", function() {
    let resultado = redondear(8.4);
    assert.deepEqual(resultado, { floor: 8, ceil: 9, round: 8 });
  })
});

describe("", function() {
  it("Si hacemos redondear(5.9) nos devuelve { floor: 5, ceil: 6, round: 6 }", function() {
    let resultado = redondear(5.9);
    assert.deepEqual(resultado, { floor: 5, ceil: 6, round: 6 });
  })
});

describe("", function() {
  it("Si hacemos redondear(24.1) nos devuelve { floor: 24, ceil: 25, round: 24 }", function() {
    let resultado = redondear(24.1);
    assert.deepEqual(resultado, { floor: 24, ceil: 25, round: 24 });
  })
});