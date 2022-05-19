describe("", function() {
  let puntajes = { EASY: 10, MEDIUM: 50, HARD: 100 };
  let desafios = { EASY: 3, MEDIUM: 4, HARD: 2 };
  it("Si hacemos obtenerExperiencia({ EASY: 10, MEDIUM: 50, HARD: 100 }, { EASY: 3, MEDIUM: 4, HARD: 2 }) retorna 430", function() {
    let resultado = obtenerExperiencia(puntajes, desafios);
    assert.equal(resultado, 430);
  })
});

describe("", function() {
  let puntajes = { EASY: 10, MEDIUM: 50, HARD: 100 };
  let desafios = { EASY: 1, MEDIUM: 2, HARD: 5 };
  it("Si hacemos obtenerExperiencia({ EASY: 10, MEDIUM: 50, HARD: 100 }, {EASY: 1, MEDIUM: 2, HARD: 5}) retorna 610", function() {
    let resultado = obtenerExperiencia(puntajes, desafios);
    assert.equal(resultado, 610);
  })
});

describe("", function() {
  let puntajes = { EASY: 1, MEDIUM: 2, HARD: 3 };
  let desafios = { EASY: 3, MEDIUM: 4, HARD: 2 };
  it("Si hacemos obtenerExperiencia({ EASY: 1, MEDIUM: 2, HARD: 3 }, {EASY: 1, MEDIUM: 2, HARD: 5}) retorna 17", function() {
    let resultado = obtenerExperiencia(puntajes, desafios);
    assert.equal(resultado,17);
  })
});
