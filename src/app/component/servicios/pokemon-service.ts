import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { catchError, take, throwError } from 'rxjs';

type Entrenador = {
  nombre: string;
  tarjetaDeEntrenador: Tarjeta;
  edad: number;
  region: string;
  genero: string;
  pokemon: string;
  pokedex: boolean;
}

type Tarjeta = {
  numero: number;
  validez: number;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public listPokemons: WritableSignal<any[]> = signal<any[]>([]);
  public pokemonDetail: WritableSignal<any> = signal<any>(null);
  public entrador: WritableSignal<Entrenador | undefined> = signal<Entrenador | undefined>(undefined);
  public pokemonSelected: WritableSignal<string> = signal<string>('');

  constructor(private http: HttpClient){
  }

  public setEntrenador(entrenador: Entrenador): void {
    this.entrador.set(entrenador);
  }

  public setPokemonSelected(pokemon: any): void {
    this.pokemonSelected.set(pokemon);
  }

  public getPokemonList(): void {
    // if(this.listPokemons().length === 0){
      this.http.get<any[]>(
        'https://pokeapi.co/api/v2/pokemon'
      ).subscribe((data: any): void => {
        console.log(data);
        this.listPokemons.set(data.results);
      });
    // }

  }
  public getPokemonDetail(pokemon: string | null): void {
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).subscribe((data: any): void =>{
      if(data){
        this.pokemonDetail.set(data);
      }

    });
  }
  
}
