"use strict";
exports.__esModule = true;
var classPunto_1 = require("./classPunto");
var classTriangulo_1 = require("./classTriangulo");
var punto1 = new classPunto_1.Punto(5, 6);
var punto2 = new classPunto_1.Punto(4, 8);
var punto3 = new classPunto_1.Punto(3, 1);
var triangulo1 = new classTriangulo_1.Triangulo(punto1, punto2, punto3);
//console.log(punto1.toString());
//console.log(punto1.distanciaAlOrigen());
//console.log(punto1.calcularDistancia(new Punto(85,36)));
//console.log(punto1.calcularCuadrante());
//console.log(calcularMasCercano());
// console.log(triangulo1.calcularLongitudLados());
// let arrayPuntos = [new Punto(7,6),new Punto(1,4),new Punto(2,8),new Punto(7,3),new Punto(8,4)];
// console.log(punto2.calcularMasCercano(arrayPuntos));
console.log(triangulo1.calcularLongitudLados());
