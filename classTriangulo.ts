import {Punto} from "./classPunto";

export class Triangulo{
    private v1:Punto;
    private v2:Punto;
    private v3:Punto;

    constructor(v1:Punto, v2:Punto, v3:Punto) {
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }

    public calcularLongitudLados():number[] {
        let lados: number[] = [];
        let l1:number = 0;
        let l2:number = 0;
        let l3:number = 0;
        l1 = Math.sqrt((this.v1.getX() - this.v2.getX())^2 + (this.v1.getY() - this.v2.getY())^2);
        l2 = Math.sqrt((this.v2.getX() - this.v3.getX())^2 + (this.v2.getY() - this.v3.getY())^2);
        l3 = Math.sqrt((this.v3.getX() - this.v1.getX())^2 + (this.v3.getY() - this.v1.getY())^2);
        lados = [l1, l2, l3]
        return lados;
    }
    
}