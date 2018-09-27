import { Component, OnInit, Input} from '@angular/core';

import { ViewCell } from 'ng2-smart-table';
import { asPureExpressionData } from '@angular/core/src/view';

import { LocalStorageService } from "../../../@core/data/localStorage.service";

@Component({
  selector: 'button-view',
  template: `
    <button class="btn btn-hero-success" (click)="onClick(this.rowData.id,1)">Comprar</button>
    <button class="btn btn-hero-info" (click)="onClick(this.rowData.id,3)">Editar</button>
    <button class="btn btn-hero-danger" (click)="onClick(this.rowData.id,2)">Eliminar</button>
  `,
})


export class TotalRenderComponent implements ViewCell, OnInit {
  renderValue: string;
  var:string;
  constructor(private ls:LocalStorageService){
    
  }
  @Input() value: string | number;
  @Input() rowData: any;

 
  ngOnInit() {
    this.renderValue = this.value.toString();
  }

  onClick(id:string, num:number) {
    if(num==1){
      this.ls.removeProducto(id);
      this.ls.getProductos();
      alert('Gracias por comprar el producto: '+this.rowData.name);
    }
    if(num==2){
      this.ls.removeProducto(id);
      this.ls.getProductos();      
      alert('Se ha eliminado el producto: '+this.rowData.name);
    }
    if(num==3){
      let update=this.ls.updateProducto(id);
      //this.ls.getProductos();      
      //alert('Se ha eliminado el producto: '+this.rowData.name);
      if(update){
        alert('se actualizo el producto:'+this.rowData.name);
        console.log(update);
      }else{
        alert('Debes introducir un valor numerico');
      }
    }
  }
}