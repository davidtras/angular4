import {Component} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {ProductoService} from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
    selector: 'productos-add',
    templateUrl: '../views/producto-add.html',
    providers: [ProductoService]
})
export class ProductoAddComponent{
    
    public titulo:string;
    public producto:Producto;
    public filesToUpload;
    public resultUpload;

    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _service:ProductoService
    ){
        this.titulo = 'Añadir Productos';
        this.producto = new Producto(0,'','','',0); 
    }

    onSubmit(){
        if(this.filesToUpload.length >= 1){
            console.log('IIIIIIIIFFFFFFFFF');
            this._service.subirArchivo([],this.filesToUpload).then((result) => {
                    this.resultUpload =result;
                    this.guardarProducto(this.resultUpload.filename);
                },
                (error) => {
                console.log(<any>error);
                }
            );
        }else{
            console.log('EEEEEEELSEEEEEE');
            this.guardarProducto("");
        }
        
    }


    guardarProducto(imagen:string){

        this.producto.imagen=imagen;
        console.log(this.producto);
        this._service.addProducto(this.producto).subscribe(
            result =>{

                if(result.code == 200){
                    alert(result.message);
                    this._router.navigate(['/productos-list']);
                }else{
                    alert('Se ha producido un error');
                }
                
            },
            error => {
                console.log(<any>error);
            }
        );

    }
    ngOnInit(){
        console.log('Página ProductoAddComponent cargada');
    }

    fileChangeEvent(fileInput:any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
        console.log(this.filesToUpload);
    }
}
