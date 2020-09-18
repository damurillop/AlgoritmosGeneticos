
var tamañoPoblacion = 100;
var cantidadGeneraciones = 50;


var ambiente = new Ambiente(tamañoPoblacion);
var algoritmo = new Algoritmo(ambiente);
var poblacionInicial = ambiente.getPoblacionInicial();
algoritmo.cantidadGeneraciones = ccantidadGeneraciones;


var table = document.getElementById('Inicial');
ambiente.printPoblacion(poblacionInicial, table);
console.log('Iniciando evolucion...');
var poblacionEvolucionada = algoritmo.evolucionar(poblacionInicial);
console.log("Poblacion ha sido evolucionada.");
table = document.getElementById('Evolucionada');
ambiente.printPoblacion(poblacionEvolucionada, table);


