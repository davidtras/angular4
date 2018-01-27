import { Component } from '@angular/core';
import {Coche} from './coche';
import {PeticionesService} from '../services/peticiones.service';
    
@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})
export class CochesComponent{

    public coche: Coche;
    public coches:Array<Coche>;
    public articulos;
l
    constructor(
        private _service:PeticionesService
    ){
        this.coche = new Coche("","","");
        this.coches = [
            new Coche("Seat Panda","105","Azul"),
            new Coche("Renault Megane","175","Rojo")
        ];
    }

    ngOnInit(){
        this._service.getArticulos().subscribe(
            result => {
                this.articulos = result;
                if(!this.articulos){
                    console.log(result);                    
                }
            },
            error => {
                var errorMensaje = <any>error;
                console.log(errorMensaje);
            }
        );
    }

    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche("","","");
    }
}