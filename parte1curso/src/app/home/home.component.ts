import { Component } from '@angular/core';
import {RopaService} from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})
export class HomeComponent{
    public titulo="Página principal";
    public listado_ropa:Array<string>;
    public prenda_guardar:string;
    constructor(
        private _ropaService:RopaService
    ){}

    ngOnInit(){
       this.listado_ropa= this._ropaService.getRopa();
    }

    guardarPrenda(){
        this.listado_ropa= this._ropaService.addPrenda(this.prenda_guardar);
        this.prenda_guardar=null;
    }

    borrarPrenda(indice:number){
        this.listado_ropa = this._ropaService.borrarPrenda(indice);
    }
}
