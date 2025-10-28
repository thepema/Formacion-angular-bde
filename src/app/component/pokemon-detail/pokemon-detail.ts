import { CommonModule } from '@angular/common';
import { Component, inject, input, InputSignal, OnInit, output, OutputEmitterRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../service/pokemon-service';

type tipo = {
  type: {
    name: string;
  }
}

@Component({
  selector: 'app-pokemon-detail',
  imports: [CommonModule],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.scss',
})
export class PokemonDetail implements OnInit {
  public readonly pokemonService: PokemonService = inject(PokemonService);

  constructor(public readonly router: Router, private readonly activatedRoute: ActivatedRoute){
  }


  public pokemon = this.pokemonService.pokemonDetail;


  public ngOnInit(): void {
    this.pokemonService.getPokemonDetail(this.activatedRoute.snapshot.params['nombre'])
    
  }

  public getTipo(types: tipo[]){
    return types.map((type: tipo) => type.type.name).join(' / ');
  }

  public volver(){
   this.router.navigate(['']);
    // this.emmiter.emit('he emitido un valor');
  }
}
