"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toString = function () {
        return this.x.toString() + "," + this.y.toString();
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setX = function (newX) {
        this.x = newX;
    };
    Punto.prototype.setY = function (newY) {
        this.y = newY;
    };
    Punto.prototype.distanciaAlOrigen = function () {
        return Math.sqrt(this.x ^ 2 + this.y ^ 2);
    };
    Punto.prototype.calcularDistancia = function (otorPunto) {
        return Math.sqrt((this.x - otorPunto.x) ^ 2 + (this.y - otorPunto.y) ^ 2);
    };
    Punto.prototype.calcularCuadrante = function () {
        var cuadrante = 0;
        if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        else if (this.x > 0 && this.y < 0) {
            cuadrante = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            cuadrante = 3;
        }
        else if (this.x < 0 && this.y > 0) {
            cuadrante = 4;
        }
        return cuadrante;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var calculo = [];
        for (var i = 0; i < puntos.length; i++) {
            calculo += Math.sqrt(puntos.x ^ 2 + puntos.y ^ 2);
        }
    };
    return Punto;
}());
exports.Punto = Punto;
