import { Component } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html'
})
export class ContactoComponent{
    public titulo="Página de contacto";
    public parametro;

    constructor(private _route: ActivatedRoute,
    private _router: Router){}

    ngOnInit(){
        this._route.params.forEach((param: Params) =>{
            this.parametro = param['page'];
        });
    }

    redirigir(pagina){
        if(pagina == 1){
            this._router.navigate(['/contacto','aqui_llego']);
        }else{
            this._router.navigate(['/pagina-principal']);
        }
        
    }

}
