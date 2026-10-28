import { Routes } from '@angular/router';
import { ImplementacionYUsos } from './Components/actualidad/actualidad';
import { Contexto } from './Components/contexto/contexto';
import { Inicio } from './Components/inicio/inicio';
import { MasInformacion } from './Components/mas-informacion/mas-informacion';
import { Noticias } from './Components/noticias/noticias';
import { Twinteach } from './Components/twinteach/twinteach';

export const routes: Routes = [
	{ path: '', component: Inicio, pathMatch: 'full' },
	{ path: 'contexto', component: Contexto },
	{ path: 'actualidad', component: ImplementacionYUsos },
	{ path: 'mas-informacion', component: MasInformacion },
	{ path: 'twinteach', component: Twinteach },
	{ path: 'noticias', component: Noticias },
	{ path: '**', redirectTo: '' },
];
