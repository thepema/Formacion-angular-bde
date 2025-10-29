import { Pipe, PipeTransform } from '@angular/core';

type tipo = {
  type: {
    name: string;
  }
}

@Pipe({
  name: 'tipoPokemon'
})
export class TipoPokemonPipe implements PipeTransform {

  transform(types: any[]): string {
    if(!Array.isArray(types)) return '';
    return types.map((type: tipo) => type.type.name).join(' / ');
  }

}


