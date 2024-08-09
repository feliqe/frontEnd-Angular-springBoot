import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: Product[]=[];

  //varibale inicializada
  productSelected: Product = new Product();

  //se indica el servcio a sincronizar
  constructor(private service: ProductService){}
  //implemnetar el compoenete de findAll
  ngOnInit(): void {
    this.service.findAll().subscribe(products => this.products = products);
  }

  //CREAR
  //elemento para crear los nuevos datos del formulario
  addProduct(product: Product){
    //validar si se desea crear o actualizar
    if(product.id > 0){
      //metodo de ACTUALIZAR configuracion
      this.service.update(product).subscribe(productUpdated => {
        this.products = this.products.map(prod => {
          if(prod.id == product.id){
            return {...productUpdated};
          }
          return prod;
        });
      });

      // this.products = this.products.map(prod => {
      //   if(prod.id == product.id){
      //     return {...product};
      //   }
      //   return prod;
      // })
    }else{
      //primer metodo como guardar los datos
      // product.id = new Date().getTime();
      // this.products.push(product);

      //metodo de crear en configuracion
      this.service.create(product).subscribe(productNew => {
        // //primer metodo
        // this.products.push({...productNew});
        //segundo metodo
        this.products = [...this.products,{...productNew }];

      })
          // //segunda metodo como guardar los datos
          // this.products = [...this.products,{...product, id: new Date().getTime() }];
    }
    //cargar campos vacios despues de realiza una accion
    this.productSelected = new Product();
  }


  //ELIMINAR
  onRemoveProduct(id: number): void {
    //metodo de eliminar en configuracion
    this.service.remove(id).subscribe(() => {
      this.products = this.products.filter(product => product.id != id);
    })
    // // se filtra con el id recibido
    // this.products = this.products.filter(product => product.id != id);
  }

  //UPDATE
  //usamos la varibales inicializada para traer la informacion de product
  onUpdateProduct(productRow: Product){
    // {... productRow} - clonamos la instancia para que no se guarde de manera automatica
    this.productSelected = {... productRow};
  }
}
