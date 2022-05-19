describe("", function() {
  it("Si hacemos pelea({ nombre: 'Chun-Li', vida: 100, ataque: 40, defensa: 10 }, { nombre: 'Cammy', vida: 50, ataque: 20, defensa: 20 } retorna { rondas: 3, gano: 'Chun-Li'}", function() {
    let combatienteA = { nombre: "Chun-Li", vida: 100, ataque: 40, defensa: 10 };
    let combatienteB = { nombre: "Cammy", vida: 50, ataque: 20, defensa: 20 };
    let resultado =  pelea(combatienteA, combatienteB)
    assert.deepEqual(resultado, { rondas: 3, gano: "Chun-Li"});
  })
});

describe("", function() {
  it("Si hacemos pelea({ nombre: 'Bellota', vida: 100, ataque: 80, defensa: 5 }, { nombre: 'Mojo Jojo', vida: 60, ataque: 50, defensa: 30 } retorna { rondas: 2, gano: 'Bellota'}", function() {
    let combatienteA = { nombre: 'Bellota', vida: 100, ataque: 80, defensa: 5 };
    let combatienteB = { nombre: 'Mojo Jojo', vida: 60, ataque: 50, defensa: 30 };
    let resultado =  pelea(combatienteA, combatienteB)
    assert.deepEqual(resultado, { rondas: 2, gano: "Bellota"});
  })
});
