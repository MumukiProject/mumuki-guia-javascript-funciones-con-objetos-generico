describe("", function() {
  it("Si hacemos contarPalabras('El que compra pocas capas pocas capas paga'), nos retorna {el: 1, que: 1, compra: 1, pocas: 2, capas: 2, paga: 1}", function() {
   let frase = 'El que compra pocas capas pocas capas paga';
   let resultado = contarPalabras(frase);
    assert.deepEqual(resultado, {el: 1, que: 1, compra: 1, pocas: 2, capas: 2, paga: 1});
  })
});

describe("", function() {
  it("Si hacemos contarPalabras('Quizás porque no soy un buen comerciante no pido nada a cambio de darte'), nos retorna {Quizás: 1, porque: 1, no: 2, soy: 1, un: 1, buen: 1, comerciante: 1, pido: 1, nada: 1, a: 1, cambio: 1, de: 1, darte: 1}", function() {
   let frase = 'Quizás porque no soy un buen comerciante no pido nada a cambio de darte';
   let resultado = contarPalabras(frase);
    assert.deepEqual(resultado, {quizás: 1, porque: 1, no: 2, soy: 1, un: 1, buen: 1, comerciante: 1, pido: 1, nada: 1, a: 1, cambio: 1, de: 1, darte: 1});
  })
});