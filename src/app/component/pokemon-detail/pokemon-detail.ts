import { CommonModule } from '@angular/common';
import { Component, effect, inject,input,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../servicios/pokemon-service';
import { TipoPokemonPipe } from '../servicios/tipo-pokemon-pipe';
import { HighlightDirective } from '../servicios/highlight';


@Component({
  selector: 'app-pokemon-detail',
  imports: [CommonModule, TipoPokemonPipe, HighlightDirective],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.scss',
})
export class PokemonDetail implements OnInit {
  public readonly pokemonService: PokemonService = inject(PokemonService);

  public pokemonName = input<string | null>(null);

  constructor(public readonly router: Router, private readonly activatedRoute: ActivatedRoute){
    effect(() => {
      this.pokemonService.getPokemonDetail(this.pokemonName());
    });
  }


  public pokemon = this.pokemonService.pokemonDetail;


  public ngOnInit(): void {
    if(this.pokemonName() !== null){
      this.pokemonService.getPokemonDetail(this.pokemonName());
    }
    
  }

  public volver(){
   this.router.navigate(['']);
    // this.emmiter.emit('he emitido un valor');
  }
}
