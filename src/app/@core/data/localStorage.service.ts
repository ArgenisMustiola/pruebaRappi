import { Injectable } from '@angular/core';
import {Producto} from './producto';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class LocalStorageService{
  
  constructor(){
    let productos= this.getProductos();
  }

  public dataSource = new BehaviorSubject<any>(this.getProductos());
  public currentProduct=this.dataSource.asObservable();

  public updateDataSource(obj:any){
    this.dataSource.next(this.getProductos());
  }

  public getProductos(): Producto[]{
    let localStorageItem = JSON.parse(localStorage.getItem('productos'));
    return localStorageItem == null ? [] : localStorageItem.productos;
  }

  public addProducto(obj:any, num:number): void{
    let total=this.setTotal(num,obj.price);
    let producto = new Producto(obj.id, obj.sublvl_id, obj.name, obj.price, num, total);
    let productos = this.getProductos();
    var index:number = productos.indexOf(productos.find(x => x.id == obj.id));
    
    if(index == -1){
      productos.push(producto);
      this.setLocalStorageProductos(productos);
      alert('Se ha agregado el producto al carrito');
    }else{
      alert('Ya tienes este producto en el carrito, si quieres eliminarlo, por favor dirigete a la seccion de Mi Carrito');
    }
    
  }


  public updateProducto(id:string): boolean{
    let productos = this.getProductos();
    var index:number = productos.indexOf(productos.find(x => x.id == id));
    var newCantidad = prompt("Introduce la nueva cantidad:", ""+productos[index].cantidad);
    if(newCantidad == null || newCantidad==""){
      return false;
    }else{
      let aux=parseInt(newCantidad);
      if(isNaN(aux)){
        return false;
      }else{
        if(aux <= 0){
          return false;
        }else{
          productos[index].cantidad=aux;
          productos[index].total=this.setTotal(aux, productos[index].price);
          this.setLocalStorageProductos(productos);
          return true;
        }
      }
    }
  }
  public removeProducto(id:string): void{
    let productos = this.getProductos();
    productos = productos.filter((producto) => producto.id != id);
    this.setLocalStorageProductos(productos);
  }

  private setLocalStorageProductos(productos: Producto[]):void{
    localStorage.setItem('productos', JSON.stringify({productos: productos}));
    this.updateDataSource(this.getProductos());
  }

  removeAll(){
    localStorage.clear();
    this.updateDataSource(this.getProductos());
  }

  private setTotal(cantidad: number, precio:string):string{
    let price=precio.split('$');
    precio=price[1].replace(',','');
    let multiplicacion=(parseInt(precio)*cantidad);
    let total='$'+multiplicacion.toLocaleString();
    total=total.replace('.',',');
    return total;
  }
  

}