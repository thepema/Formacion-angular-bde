import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public listPokemons: WritableSignal<any[]> = signal<any[]>([]);
  public pokemonDetail: WritableSignal<any> = signal<any>(null);

  constructor(private http: HttpClient){
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
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).pipe(
      catchError(() => {
      window.alert('Error en la obtención del detalle');
      return throwError(() => 'Error al obtener el detalle');
    })).subscribe((data: any): void =>{
      if(data){
        this.pokemonDetail.set(data);
      }

    });
  }
  
}
