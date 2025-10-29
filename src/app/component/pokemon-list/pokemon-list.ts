import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../servicios/pokemon-service';
import { PokemonDetail } from "../pokemon-detail/pokemon-detail";
import { HighlightDirective } from '../servicios/highlight';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, PokemonDetail, HighlightDirective],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
  host: {
    '(window:keydown)': 'flecha($event)'
  }
})
export class PokemonList implements OnInit {
  private readonly router: Router = inject(Router);
  private readonly pokemonService: PokemonService = inject(PokemonService);

  public detailId: WritableSignal<string | null> = signal<string | null>(null);
  public itemSelected: { nombre: string; index: number } | null = null

  public listPokemons = this.pokemonService.listPokemons;

  constructor(){

  }

  ngOnInit(): void {
    this.pokemonService.getPokemonList();
  }
  
  public mostrarDetalle = false;


  public navigateDetail(name: string, $index: number){
    this.detailId.set(name);
    this.itemSelected = {nombre: name, index: $index};
  }

  public receptor($event: any){
    console.log($event);
  }

  flecha(event: KeyboardEvent){
    if(this.detailId()){
      if(event.key === 'ArrowDown'){
        if(this.itemSelected?.index !== this.listPokemons().length - 1 && this.itemSelected?.index){
          const index = this.itemSelected?.index + 1
          const down = this.listPokemons()[index];
          this.itemSelected = { nombre: down.name , index: index};
          this.detailId.set(down.name);
        }
      }else if(event.key === 'ArrowUp'){
        if(this.itemSelected?.index !== 0 && this.itemSelected?.index) {
          const index = this.itemSelected?.index -1
          const up = this.listPokemons()[index];
          this.itemSelected = { nombre: up.name , index: index};
          this.detailId.set(up.name);
        }
      }
    }
  }
}
