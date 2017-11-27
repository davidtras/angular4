import { Component } from '@angular/core';
import {Coche} from './coche';
    
@Component({
    selector: 'coches',
    templateUrl: './coches.component.html'
})
export class CochesComponent{

    public coche: Coche;

    constructor(){
        this.coche = new Coche("","","");
    }

    onSubmit(){
        alert(this.coche.nombre+" - "+this.coche.caballaje+" - "+this.coche.color);
    }
}