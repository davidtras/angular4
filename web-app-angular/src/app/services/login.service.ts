import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {GLOBAL} from './global';
import { reject } from 'q';

@Injectable()
export class LoginService{

    public url:string;

    constructor(
        public _http:Http
    ){
        this.url = GLOBAL.urlLogin;
    }

    singIn(user:User){
        var llamada:string = this.url+'sign-up'; 
        let json = JSON.stringify(user);
        let headers = new Headers({'Content-type':'application/json;charset=UTF-8'});

        return this._http.post(llamada,json,{headers:headers}).map(res=>res.json());
    }
}