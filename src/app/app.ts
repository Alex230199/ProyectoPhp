import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Actualidad } from './Components/actualidad/actualidad';
import { Contexto } from './Components/contexto/contexto';
import { Inicio } from './Components/inicio/inicio';
import { Twinteach } from './Components/twinteach/twinteach';
import { MasInformacion } from './Components/mas-informacion/mas-informacion';
import { Menu } from './Components/menu/menu';


@Component({
  imports: [RouterOutlet,
     CommonModule,
      Actualidad,
       Contexto,
        Inicio,
         MasInformacion,
          Twinteach,
           Menu
         ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ProyectoPhp');
}
