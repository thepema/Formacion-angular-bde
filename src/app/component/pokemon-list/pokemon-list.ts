import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../service/pokemon-service';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
  
})
export class PokemonList implements OnInit {
  private readonly router: Router = inject(Router);
  private readonly pokemonService: PokemonService = inject(PokemonService);

  public listPokemons = this.pokemonService.listPokemons;

  constructor(){

  }

  ngOnInit(): void {
    this.pokemonService.getPokemonList();
  }
  
  public mostrarDetalle = false;


  public navigateDetail(name: string){
    this.router.navigate([`detail/${name}`]);
  }

  public receptor($event: any){
    console.log($event);
  }
}
