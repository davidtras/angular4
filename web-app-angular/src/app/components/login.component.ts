import {Component} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {LoginService} from '../services/login.service';
import { User } from '../models/user';
import {GLOBAL} from '../services/global';

@Component({
    selector: 'login',
    templateUrl: '../views/login.html',
    providers: [LoginService]
})
export class LoginComponent{
    public titulo:string;
    public user:User;

    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _service:LoginService
    ){
        this.titulo = 'Login';
        this.user = new User(-1,"","");
    }

    ngOnInit(){
        console.log('Página login cargada');
    } 

    onSubmit(){
        this._service.singIn(this.user).subscribe(
            result =>{

                if(result.code == 200){
                    alert(result);
                }else{
                    this._router.navigate(['/productos-list']);
                }
                
            },
            error => {
                console.log(<any>error);
            }
        );
    }

}