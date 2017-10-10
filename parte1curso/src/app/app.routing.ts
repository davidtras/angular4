import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {EmpleadoComponent} from './empleado/empleado.component';
import {FrutaComponent} from './fruta/fruta.component';

const appRoutes : Routes = [
    {path: '', component: EmpleadoComponent},
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: '**', component: EmpleadoComponent}
];

export const appRoutingProviders:any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);