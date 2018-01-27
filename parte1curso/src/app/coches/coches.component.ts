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
        alert(this._service.getPrueba());
    }

    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche("","","");
    }
}