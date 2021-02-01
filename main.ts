import {Punto} from "./classPunto";
import {Triangulo} from "./classTriangulo";

let punto1 : Punto = new Punto(56,27);
let punto2 : Punto = new Punto(-25,41);
let punto3 : Punto = new Punto(1,58);

let triangulo1 : Triangulo = new Triangulo(punto1, punto2, punto3);

//console.log(punto1.toString());
 
//console.log(punto1.distanciaAlOrigen());

//console.log(punto1.calcularDistancia(new Punto(85,36)));

//console.log(punto1.calcularCuadrante());

//console.log(calcularMasCercano());

console.log(triangulo1.calcularLongitudLados());