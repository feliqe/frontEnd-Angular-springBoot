import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  //se inidca el mapeo inicial de los campos
  // @Input() - agregamos para poder definir la carga del update
  @Input() product: Product={
    id: 0,
    name: '',
    description: '',
    price: 0
  };

  //indicar que se va enviar una informacion al padre
  //@Output() - es un decorador de angular
@Output() newProductEvent = new EventEmitter();

  //accion de boton de form
  onSubmit(): void {
    //indicamos la emision de los campos de form
    this.newProductEvent.emit(this.product);
    console.log(this.product);
  }

  //funcion para limpiar campo del boton de limpiar en form
  clean(): void {
    this.product = {
      id: 0,
      name: '',
      description: '',
      price: 0
    }
  }
}