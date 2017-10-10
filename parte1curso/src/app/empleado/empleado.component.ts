import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
    public titulo = 'Componente Empleado';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado = new Empleado('Antonio Cadenas',31,'Cocinero',true);
        this.trabajadores = [
            new Empleado('Antonio Cadenas',31,'Cocinero',true),
            new Empleado('Pedro Guinche',33,'Gañán',false),
            new Empleado('Silvia Pérez',32,'Azafata',true),
            new Empleado('Roberto Sedinho',65,'Entrenador',false)];
        this.trabajador_externo = false;
        this.color='green';
        this.color_seleccionado='#ccc';
    }

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }
}