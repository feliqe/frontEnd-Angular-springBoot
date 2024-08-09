import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, map ,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // se define el arrglo con llaves, para asignar valor a las variables del models
  private products: Product[] = [
    {
      id: 1,
      name: 'Mesa comedor',
      description: 'Excelente mesa comerdor',
      price: 700
    },
    {
      id: 2,
      name: 'Teclado mecanico',
      description: 'Excelente teclado para typing',
      price: 500
    }
  ];

  //realizar la asociaicon con el backEnd
  //variable con la ruta del backEnd
  private url: string = 'http://localhost:8080/products';

  constructor( private http: HttpClient) { }

  //arreglo de productos para ver
  findAll(): Observable<Product[]> {
    // return of(this.products);
    //asociamos la configuracion de la conexion al banckend y tambie asocia el models de product
    return this.http.get<Product[]>(this.url).pipe(
      map((response: any) => response._embedded.products as Product[]),
    );
  }

  //funcion de configuracion de CREAR
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.url, product);
  }

  //funcion de configuracion de ACTUALIZAR
  update(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.url}/${product.id}`, product);
  }

  //funcion de configuracion de BORRAR
  remove(id: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`)
  }
}
