import { Component, OnInit, Input } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'available-view',
  template: `
    <span *ngIf="this.rowData.available==true" class="text-success">Si</span>
    <span *ngIf="this.rowData.available==false" class="text-danger">No</span>
  `,
})
export class DisponibilidadRenderComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;


  ngOnInit() {
    this.renderValue = this.value.toString();
  }

  
}