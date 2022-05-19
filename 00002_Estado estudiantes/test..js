describe("", function() {
  let materiasAgus = {
    matematica: [3, 6, 8, 8],
    algoritmos: [10, 7, 9],
    algebra: [4, 5]
  };
  it("Si Agus aprobó todas las materias, al hacer agruparMateriasPorEstado(materiasAgus) nos devuelve { aprobadas: ['matematica', 'algoritmos', 'algebra'], desaprobadas: [] }", function() {
    let resultado = agruparMateriasPorEstado(materiasAgus);
    assert.deepEqual(resultado,{ aprobadas: ['matematica', 'algoritmos', 'algebra'], desaprobadas: []});
  })
});

describe("", function() {
  let materiasJuli = {
    matematica: [3, 2, 2, 3],
    algoritmos: [2, 4, 2],
    algebra: [4, 3]
  };
  it("Si Juli desaprobó todas las materias, al hacer agruparMateriasPorEstado(materiasJuli) nos devuelve { aprobadas: [], desaprobadas: ['matematica', 'algoritmos', 'algebra'] }", function() {
    let resultado = agruparMateriasPorEstado(materiasJuli);
    assert.deepEqual(resultado,{ aprobadas: [], desaprobadas: ['matematica', 'algoritmos', 'algebra'] });
  })
});

describe("", function() {
  let materiasJuli = {
    matematica: [3, 3, 3, 4],
    algoritmos: [4, 4, 4],
    algebra: [4, 4]
  };
  it("Si Ale desaprobó matematica, al hacer agruparMateriasPorEstado(materiasAle) nos devuelve { aprobadas: ['algoritmos', 'algebra'], desaprobadas: ['matematica'] }", function() {
    let resultado = agruparMateriasPorEstado(materiasJuli);
    assert.deepEqual(resultado,{ aprobadas: ['algoritmos', 'algebra'], desaprobadas: ['matematica'] });
  })
});