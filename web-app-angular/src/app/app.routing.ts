import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { HomeComponent} from './components/home.component';
import { ProductosListComponent} from './components/productos-list.component';
import { ProductoAddComponent} from './components/producto-add.component';
import { ProductoDetailComponent} from './components/producto-detail.component';
import { ErrorComponent} from './components/error.component';


const appRoutes:Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'productos-list',component:ProductosListComponent},
    {path:'producto-add',component:ProductoAddComponent},
    {path:'producto/:id',component:ProductoDetailComponent},
    {path:'**',component:ErrorComponent}//esta ruta tienes que ser la ultima, es para rutas no validas
];

export const appRoutingProviders:any[] =[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
