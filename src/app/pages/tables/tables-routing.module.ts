import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { CustomRenderComponent } from "./smart-table/custom-render.component";
import { DisponibilidadRenderComponent } from "./smart-table/disponibilidad-render.component";
import { CarritoComponent } from "./mi-carrito/carrito.component";
import { TotalRenderComponent } from "./mi-carrito/total-render.component";

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'productos/:cat',
      component: SmartTableComponent
    },
    {
      path:'',
      component: CustomRenderComponent,
    },
    {
      path:'',
      component: DisponibilidadRenderComponent,
    },
    {
      path: 'mi-carrito',
      component: CarritoComponent,
    },
    {
      path:'',
      component: TotalRenderComponent,
    },
  ],  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  CustomRenderComponent,
  DisponibilidadRenderComponent,
  CarritoComponent,
  TotalRenderComponent,
];
