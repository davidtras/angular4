import {Component} from '@angular/core';


@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent{
    public nombre_componente='Componente de fruta';
    public listado_frutas='Naranja,Manzana,Pera y Sandia';

    public nombre:string;
    public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<any>=['Carpintero',44,'Fontanero'];
    public comodin:any;

    constructor(){
        this.nombre= 'David Molina';
        this.edad = 77;
        this.mayorDeEdad = false;
        this.comodin= 'SI';

    }

    ngOnInit(){

        this.cambiarNombre();
        this.cambiarEdad(23);
        console.log(this.nombre + " " + this.edad);
    }

    cambiarNombre(){
        this.nombre = 'Angel López';
    }

    cambiarEdad(edad){
        this.edad = edad;
    }

}