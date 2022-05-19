describe("", function() {
  let user1 = {
  nombre: 'Grace',
  apellido: 'Hopper',
  email: 'grace.hopper@gmail.com',
  password: '123456'
};
  it("Si hacemos validarPassword(user1) debería retornar { verificada: false, mensaje: 'Contraseña muy insegura' }", function() {
    let resultado = validarPassword(user1);
    assert.deepEqual(resultado,{ verificada: false, mensaje: 'Contraseña muy insegura' });
  })
});

describe("", function() {
  let user2 = {
  nombre: 'Ada',
  apellido: 'Lovelace',
  email: 'ada.lovelace@gmail.com',
  password: '**178!Ada--'
};
  it("Si hacemos validarPassword(user2) debería retornar { verificada: true, mensaje: '' }", function() {
    let resultado = validarPassword(user2);
    assert.deepEqual(resultado,{ verificada: true, mensaje: '' });
  })
});

describe("", function() {
  let user3 = {
  nombre: 'Hedy',
  apellido: 'Lamarr',
  email: 'hlamarr@gmail.com',
  password: '1234'
};
  it("Si hacemos validarPassword(user3) debería retornar { verificada: false, mensaje: 'Contraseña con menos de 6 caracteres' }", function() {
    let resultado = validarPassword(user3);
    assert.deepEqual(resultado,{ verificada: false, mensaje: 'Contraseña con menos de 6 caracteres' });
  })
})