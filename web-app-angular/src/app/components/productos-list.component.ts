import {Component} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {ProductoService} from '../services/producto.service';
import { Producto } from '../models/producto';
import {GLOBAL} from '../services/global';

@Component({
    selector: 'productos-list',
    templateUrl: '../views/productos-list.html',
    providers: [ProductoService]
})
export class ProductosListComponent{
    public titulo:string;
    public productos:Producto[];
    public urlImages;

    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _service:ProductoService
    ){
        this.titulo = 'Listado de Productos';
        this.urlImages = GLOBAL.urlImages;
    }

    ngOnInit(){
        console.log('Página ProductosComponent cargada');
        this._service.getProductos().subscribe(
            result =>{

                if(result.code == 200){
                    this.productos = result.lstProductos;
                }else{
                    alert('Se ha producido un error');
                }
                
            },
            error => {
                console.log(<any>error);
            }
        );
    }
}
