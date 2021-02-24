import {Punto} from "./classPunto";
import {Triangulo} from "./classTriangulo";

let punto1 : Punto = new Punto(5,6);
let punto2 : Punto = new Punto(4,8);
let punto3 : Punto = new Punto(3,1);

let triangulo1 = new Triangulo(punto1, punto2, punto3);

//console.log(punto1.toString());
 
//console.log(punto1.distanciaAlOrigen());

//console.log(punto1.calcularDistancia(new Punto(85,36)));

//console.log(punto1.calcularCuadrante());

//console.log(calcularMasCercano());

// console.log(triangulo1.calcularLongitudLados());

// let arrayPuntos = [new Punto(7,6),new Punto(1,4),new Punto(2,8),new Punto(7,3),new Punto(8,4)];

// console.log(punto2.calcularMasCercano(arrayPuntos));

console.log(triangulo1.calcularLongitudLados());