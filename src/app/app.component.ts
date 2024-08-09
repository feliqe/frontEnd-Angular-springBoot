import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './products/components/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // CommonModule : cargar libreria con compornete de ng
  imports: [CommonModule ,RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title: string = 'Hola Felipe';
  enabled: boolean = false;

  courses: string[] = ['Angular','React','Spring Boot'];

  setEnabled(): void{
    //condicion para mostra o ocultar
    this.enabled = this.enabled? false: true;
    console.log('se realizo el clik en setEnabled')
  }
}
