import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./component/pokemon-list/pokemon-list').then( (m: any) => m.PokemonList)
    },
    {
        path: 'crear', 
         loadComponent: () => import('./component/entrenador-form/entrenador-form').then( (m: any) => m.EntrenadorForm)
    }
];
