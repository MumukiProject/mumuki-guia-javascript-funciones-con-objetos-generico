describe("", function() {
  it("Si hacemos parsearParametrosDeBusqueda('http://www.exercises.com?palabraClave=objetos&lenguaje=javascript&nivel=intermedio') el palabraClave es objetos", function() {
    let resultado =  parsearParametrosDeBusqueda("http://www.exercises.com?palabraClave=objetos&lenguaje=javascript&nivel=intermedio");
    assert.equal(resultado.palabraClave, 'objetos');
  })
  it("Si hacemos parsearParametrosDeBusqueda('http://www.exercises.com?palabraClave=objetos&lenguaje=javascript&nivel=intermedio') el lenguaje es javascript", function() {
    let resultado =  parsearParametrosDeBusqueda("http://www.exercises.com?palabraClave=objetos&lenguaje=javascript&nivel=intermedio");
    assert.equal(resultado.lenguaje, 'javascript');
  })
  it("Si hacemos parsearParametrosDeBusqueda('http://www.exercises.com?palabraClave=objetos&lenguaje=javascript&nivel=intermedio') el nivel es intermedio", function() {
    let resultado =  parsearParametrosDeBusqueda("http://www.exercises.com?palabraClave=objetos&lenguaje=javascript&nivel=intermedio");
    assert.equal(resultado.nivel, 'intermedio');
  })
});

describe("", function() {
  it("Si hacemos parsearParametrosDeBusqueda('http://www.exercises.com?palabraClave=funcional&lenguaje=haskell&nivel=avanzado') el palabraClave es funcional", function() {
    let resultado =  parsearParametrosDeBusqueda("http://www.exercises.com?palabraClave=funcional&lenguaje=haskell&nivel=avanzado");
    assert.equal(resultado.palabraClave, 'funcional');
  })
  it("Si hacemos parsearParametrosDeBusqueda('http://www.exercises.com?palabraClave=funcional&lenguaje=haskell&nivel=avanzado') el lenguaje es haskell", function() {
    let resultado =  parsearParametrosDeBusqueda("http://www.exercises.com?palabraClave=funcional&lenguaje=haskell&nivel=avanzado");
    assert.equal(resultado.lenguaje, 'haskell');
  })
  it("Si hacemos parsearParametrosDeBusqueda('http://www.exercises.com?palabraClave=funcional&lenguaje=haskell&nivel=avanzado') el nivel es avanzado", function() {
    let resultado =  parsearParametrosDeBusqueda("http://www.exercises.com?palabraClave=funcional&lenguaje=haskell&nivel=avanzado");
    assert.equal(resultado.nivel, 'avanzado');
  })
});

