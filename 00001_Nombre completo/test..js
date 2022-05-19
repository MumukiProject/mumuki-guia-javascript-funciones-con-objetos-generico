describe("", function() {
  let valentina = {
  nombre: 'Valentina',
  apellido: 'Tereshkova',
  email: 'Valentina.Tereshkova@gmail.com',
  plan: 'premium'
};
  it("Si la función obtenerNombreCompleto, recibe por parámetro una persona que se llama Valentina Tereshkova, nos va a retornar Valentina Tereshkova", function() {
    let resultado = obtenerNombreCompleto(valentina);
    assert.equal(resultado,'Valentina Tereshkova');
  })
});

describe("", function() {
  let eddie = {
  nombre: 'Eddie',
  apellido: 'Vedder',
  email: 'Eddie.Veder@gmail.com',
  plan: 'premium'
};
  it("Si la función obtenerNombreCompleto, recibe por parámetro una persona que se llama Eddie Vedder, nos va a retornar Eddie Vedder", function() {
    let resultado = obtenerNombreCompleto(eddie);
    assert.equal(resultado,'Eddie Vedder');
  })
});

describe("", function() {
  let brenda = {
  nombre: 'Brenda',
  apellido: 'Martin',
  email: 'Brenda.Martin@gmail.com',
  plan: 'premium'
};
  it("Si la función obtenerNombreCompleto, recibe por parámetro una persona que se llama Brenda Martin, nos va a retornar Brenda Martin", function() {
    let resultado = obtenerNombreCompleto(brenda);
    assert.equal(resultado,'Brenda Martin');
  })
})