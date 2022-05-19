describe("", function() {
  it("Si hacemos  obtenerInfoDelParrafo('Do. Or do not. There is no try.') la cantidad de letras es 21",
  function() {
    let resultado =  obtenerInfoDelParrafo("Do. Or do not. There is no try.");
    assert.equal(21, resultado.letras);
  })
  it("Si hacemos  obtenerInfoDelParrafo('Do. Or do not. There is no try.') la cantidad de palabras es 8", function() {
    let resultado =  obtenerInfoDelParrafo("Do. Or do not. There is no try.");
    assert.equal(resultado.palabras, 8);
  })
  it("Si hacemos  obtenerInfoDelParrafo('Do. Or do not. There is no try.') la cantidad de oraciones es 3", function() {
    let resultado =  obtenerInfoDelParrafo("Do. Or do not. There is no try.");
    assert.equal(resultado.oraciones, 3);
  })
});

describe("", function() {
  it("Si hacemos obtenerInfoDelParrafo('¿Mi nombre qué letras tiene?. ¿Acaso es él quien en pie me mantiene?') la cantidad de letras es 51", function() {
    let resultado =  obtenerInfoDelParrafo("¿Mi nombre qué letras tiene?. ¿Acaso es él quien en pie me mantiene?");
    assert.equal(resultado.letras, 51);
  })
  it("Si hacemos obtenerInfoDelParrafo('¿Mi nombre qué letras tiene?. ¿Acaso es él quien en pie me mantiene?') la cantidad de palabras es 13", function() {
    let resultado =  obtenerInfoDelParrafo("¿Mi nombre qué letras tiene?. ¿Acaso es él quien en pie me mantiene?");
    assert.equal(resultado.palabras, 13);
  })
  it("Si hacemos obtenerInfoDelParrafo('¿Mi nombre qué letras tiene?. ¿Acaso es él quien en pie me mantiene?') la cantidad de letras es 51", function() {
    let resultado =  obtenerInfoDelParrafo("¿Mi nombre qué letras tiene?. ¿Acaso es él quien en pie me mantiene?");
    assert.equal(resultado.oraciones, 2);
  })
});
