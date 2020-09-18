
// Valores del algoritmo. 
var TAMAÑOPOBLACION = 100;
var CANTIDADGENERACIONES = 50;
var PROBABLIDADMUTACION = 0.1;
var PROBABLIDADCRUCE = 1;

document.getElementById('tamaPobla').innerHTML = 'Tamaño de la poblacion: ' + TAMAÑOPOBLACION;
document.getElementById('cantGener').innerHTML = 'Cantidad de generaciones: ' + CANTIDADGENERACIONES;

// Inicializo las clases. 
var ambiente = new Ambiente(TAMAÑOPOBLACION);
var algoritmo = new Algoritmo(ambiente);
var poblacionInicial = ambiente.getPoblacionInicial();
algoritmo.cantidadGeneraciones = CANTIDADGENERACIONES;
algoritmo.probabilidadMutacion = PROBABLIDADMUTACION;
algoritmo.probablidadCruce = PROBABLIDADCRUCE;

// Evoluciono la poblacion. 
var table = document.getElementById('Inicial');
ambiente.printPoblacion(poblacionInicial, table);
console.log('Iniciando evolucion...');
var poblacionEvolucionada = algoritmo.evolucionar(poblacionInicial);
console.log("Poblacion ha sido evolucionada.");
table = document.getElementById('Evolucionada');
ambiente.printPoblacion(poblacionEvolucionada, table);


