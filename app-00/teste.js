var input = require('fs').readFileSync('entrada.txt', 'utf8');
var entradas = input.split('\n')



var entradaDiaInicial = entradas[0].split(' ');
var diaInicial = parseInt(entradaDiaInicial[1]);

var entradaDiaFinal = entradas[2].split(' ');
var diaFinal = parseInt(entradaDiaFinal[1]);

var entradaHora1 = entradas[1].split(':');
var horaInicial = parseInt(entradaHora1[0]);
var minutoInicial = parseInt(entradaHora1[1]);
var segundoInicial = parseInt(entradaHora1[2]);

var entradaHora2 = entradas[3].split(':');
var horaFinal = parseInt(entradaHora2[0]);
var minutoFinal = parseInt(entradaHora2[1]);
var segundoFinal = parseInt(entradaHora2[2]);

var totalDias = 0;
var totalHoras = 0;
var totalMinutos = 0;
var totalSegundos = 0;


    var sec1 = diaInicial * 86400;
	var sec2 = ((horaInicial * 3600) + ( minutoInicial * 60) + segundoInicial);
	var totalSec1 = sec1 + sec2; 
	
	var sec3 = diaFinal * 86400;
	var sec4 = ((horaFinal * 3600) + ( minutoFinal * 60) + segundoFinal);
	var totalSec2 = sec3 + sec4; 
	
	var segundosTotal = totalSec2 - totalSec1;
	
	const dias = Math.floor(segundosTotal / 86400);
	var resto = segundosTotal % 86400;
	
	const horas = Math.floor(resto / 3600);
	resto = resto % 3600;
	
	const minutos = Math.floor(resto / 60);
	resto = resto % 60;
	
	var segundos = resto;





console.log(dias + " dia(s)");
console.log(horas + " hora(s)");
console.log(minutos + " minuto(s)");
console.log(segundos + " segundo(s)");