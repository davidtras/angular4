import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Producto} from '../models/producto';
import {GLOBAL} from './global';
import { reject } from 'q';


@Injectable()
export class ProductoService{

    public url:string;

    constructor(
        public _http:Http
    ){
        this.url = GLOBAL.url;
    }

    getProductos(){
        var llamada:string = this.url+'productos'; 
        return this._http.get(llamada).map(res=>res.json());
    }

    getProducto(id){
        var llamada:string = this.url+'producto/'+id; 
        return this._http.get(llamada).map(res=>res.json());
    }

    addProducto(producto:Producto){
        var llamada:string = this.url+'save-producto'; 
        let json = JSON.stringify(producto);
        let headers = new Headers({'Content-type':'application/json;charset=UTF-8'});

        return this._http.post(llamada,json,{headers:headers}).map(res=>res.json());
    }

    updateProducto(producto:Producto){
        var llamada:string = this.url+'update-producto'; 
        let json = JSON.stringify(producto);
        let headers = new Headers({'Content-type':'application/json;charset=UTF-8'});

        return this._http.post(llamada,json,{headers:headers}).map(res=>res.json());
    }

    borrarProducto(id){
        var llamada:string = this.url+'delete-producto/'+id; 
        return this._http.get(llamada).map(res=>res.json());
    }

    subirArchivo(params:Array<string>,files:Array<File>){
        let url :string = this.url+'upload-file'; 
        return new Promise((resolve,reject) => {
            var formData:any = new FormData();
            var xhr = new XMLHttpRequest();

            for(var i=0; i < files.length ; i++){
                formData.append('file',files[i],files[i].name);
            }

            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response));
                    }else{
                        reject(xhr.response);
                    }

                }
            };

            xhr.open("POST",url,true);
            xhr.send(formData);





        });
    }
}
