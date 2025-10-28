import { Routes } from '@angular/router';
import { PokemonList } from './component/pokemon-list/pokemon-list';
import { PokemonDetail } from './component/pokemon-detail/pokemon-detail';

export const routes: Routes = [
    { path: '', component: PokemonList},
    {path: 'detail/:nombre', component: PokemonDetail}
];
