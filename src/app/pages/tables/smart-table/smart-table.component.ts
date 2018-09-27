import { Component, Input, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ActivatedRoute, Params } from '@angular/router';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import { productsData } from "./products-data";

import { CustomRenderComponent } from "./custom-render.component";
import { DisponibilidadRenderComponent} from "./disponibilidad-render.component"
import { count } from 'rxjs/operators';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent implements OnInit{
  @Input() cat:number;
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
      available: {
        title: 'Disponible',
        type: 'custom',
        renderComponent: DisponibilidadRenderComponent,
        filter:false
      },
      button: {
        title: 'Añadir al carrito',
        type: 'custom',
        renderComponent: CustomRenderComponent,
        filter:false
      },
    },
  };
  constructor(private rutaActiva: ActivatedRoute){}

  ngOnInit(){
    this.source=productsData;
    var cont=0;
    this.cat=this.rutaActiva.snapshot.params.cat;
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.cat = params.cat;
        if(this.cat == 0){
          this.source=[];
          this.source=productsData;
        }
        if(this.cat != 0){
          cont=0;
          this.source=[];
          //console.log(this.cat);
          for(let i=0; i<(productsData).length;i++){
            if(productsData[i].sublevel_id==this.cat){
              this.source[cont]=productsData[i];
              cont+=1;
            }
          }
        }
        
      }
    );
  }
  
  
}
