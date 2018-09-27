import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {  TotalRenderComponent } from './total-render.component'

import { LocalStorageService } from "../../../@core/data/localStorage.service";
import { Producto } from "../../../@core/data/producto";

import { count} from 'rxjs/operators';



@Component({
  selector: 'ngx-carrito',
  templateUrl: './carrito.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class CarritoComponent implements OnInit{
  private source=[];

  settings = {
    actions: {
      add: false,
      edit:false,
      delete:false,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'string',
      },
      name: {
        title: 'Nombre',
        type: 'string',
      },
      price: {
        title: 'Precio',
        type: 'string',
      },
      cantidad: {
        title: 'Cantidad',
        type: 'number',
      },
      total:{
        title: 'Total',
        type: 'string',
      },
      action:{
        title:'Accion',
        type:'custom',
        renderComponent: TotalRenderComponent,
        filter:false
      }

    },
  };
  constructor(private ls: LocalStorageService){}

  ngOnInit(){
    let valor=this.ls.currentProduct.subscribe(source => this.source = source);
  }

  buyAll(){
    this.ls.removeAll();
    alert('Compra exitosa. Gracias por preferirnos.!')
  }
  
}
