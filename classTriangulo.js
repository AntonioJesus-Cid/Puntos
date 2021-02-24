"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(v1, v2, v3) {
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }
    // public calcularLongitudLados():number[] {
    //     let lados: number[] = [];
    //     let l1:number = 0;
    //     let l2:number = 0;
    //     let l3:number = 0;
    //     l1 = Math.sqrt((this.v1.getX() - this.v2.getX())^2 + (this.v1.getY() - this.v2.getY())^2);
    //     l2 = Math.sqrt((this.v2.getX() - this.v3.getX())^2 + (this.v2.getY() - this.v3.getY())^2);
    //     l3 = Math.sqrt((this.v3.getX() - this.v1.getX())^2 + (this.v3.getY() - this.v1.getY())^2);
    //     lados = [l1, l2, l3]
    //     return lados;
    // }
    Triangulo.prototype.calcularLongitudLados = function () {
        var lados = [];
        lados.push(this.v1.calcularDistancia(this.v2));
        lados.push(this.v2.calcularDistancia(this.v3));
        lados.push(this.v3.calcularDistancia(this.v1));
        return lados;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
