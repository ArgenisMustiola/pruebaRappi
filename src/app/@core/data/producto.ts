export class Producto {
    id: string;
    sublvl_id:number;
    name:string;
    price:string;
    cantidad:number;
    total:string;
    constructor(
        id:string,
        sublvl_id:number,
        name:string,
        price:string,
        cantidad:number,
        total:string,
    ){
        this.id=id;
        this.sublvl_id=sublvl_id;
        this.name=name;
        this.price=price;
        this.cantidad=cantidad;
        this.total=total;
        
    }
}
