import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-implementacion-y-usos',
  styleUrl: './actualidad.css',
  templateUrl: './actualidad.html',
})
export class ImplementacionYUsos {
  demoNombre = 'Mundo';

  actualizarDemoNombre(event: Event): void {
    this.demoNombre = (event.target as HTMLInputElement).value;
  }

  get demoResultado(): string {
    return `Hola, ${this.demoNombre || 'Mundo'}`;
  }
}
