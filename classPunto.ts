export class Punto{
    private x:number = 0;
    private y:number = 0;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }
    
    public toString(){
        return this.x.toString() + "," + this.y.toString();
    }

    public getX(){
        return this.x;
    }
    public getY(){
        return this.y;
    }

    public setX(newX:number){
        this.x = newX;
    }
    public setY(newY:number){
        this.y = newY;
    }

    public distanciaAlOrigen():number{
        return Math.sqrt(this.x^2 + this.y^2);
    }

    public calcularDistancia(otorPunto:Punto):number{
        return Math.sqrt((this.x - otorPunto.x)^2 + (this.y - otorPunto.y)^2);
    }

    public calcularCuadrante():number {
        let cuadrante:number = 0;
        if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        else if (this.x > 0 && this.y < 0) {
            cuadrante = 2;
        }
        else if(this.x < 0 && this.y < 0) {
            cuadrante = 3;
        }
        else if(this.x < 0 && this.y > 0) {
            cuadrante = 4;
        }
        return cuadrante;
    }

    public calcularMasCercano(puntos : Punto[]): Punto {
        let calculo:number[] = [];
        for(let i = 0; i < puntos.length; i++) {
            calculo += Math.sqrt(puntos.x^2 + puntos.y^2);
        }
    }
}