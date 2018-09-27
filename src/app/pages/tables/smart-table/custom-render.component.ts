import { Component, OnInit, Input } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';
import { asPureExpressionData } from '@angular/core/src/view';

import { LocalStorageService } from "../../../@core/data/localStorage.service";

@Component({
  selector: 'button-view',
  template: `
    <div class="input-group" *ngIf="this.rowData.available == true">
      <input #cantidad class="form-control" placeholder="1" type="number" value="1" required="required" min="0" max="99">
      <span class="input-group-append">
        <button class="btn btn-hero-success input-group-text " (click)="onClick(cantidad.value)"  ><i class="nb-plus"></i></button>
      </span>
    </div>
    <div class="input-group" *ngIf="this.rowData.available == truefalse">
      <input class="form-control" placeholder="0" type="number" value="">
      <span class="input-group-append">
        <button class="btn btn-hero-danger input-group-text " disabled ><i class="nb-plus"></i></button>
      </span>
    </div>
  `,
})


export class CustomRenderComponent implements ViewCell, OnInit {
  renderValue: string;
  constructor(private ls:LocalStorageService){
    
    
  }
  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

  onClick(num:number) {
    if(num>=1){
      this.ls.addProducto(this.rowData,num);
    }
    else if(!num){
      alert('Ups, no has agregado un numero en la casilla de cantidad');
    }else if(num<=0){
      alert('Debes agregar un numero mayor a 0');      
    }
  }
}