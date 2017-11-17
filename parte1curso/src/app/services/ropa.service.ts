import {Injectable} from '@angular/core';

@Injectable()
export class RopaService{

    public ropa = 'Pantalones vaqueros';
    public array_ropa:Array<string>=['Pantalon vaquero','Jersey azul'];
    prueba(){
        return this.ropa;
    }

    addPrenda(nombre:string):Array<string>{
        this.array_ropa.push(nombre);
        return this.getRopa();
    }

    getRopa():Array<string>{
        return this.array_ropa;
    }

    borrarPrenda(index:number):Array<string>{
        this.array_ropa.splice(index,1);
        return this.getRopa();
    }

}