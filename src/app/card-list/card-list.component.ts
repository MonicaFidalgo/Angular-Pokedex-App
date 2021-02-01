import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
import {Observable} from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})

export class CardListComponent implements OnInit {

  pokemonsData$ : Observable<any>;
  pokemonsArray: any [] = [];
  pokemons: any [] = [];

  moreInfo() {
    console.log("More info comming soon")
  }

  constructor(
    private dataService: DataService) {
  }
  
  ngOnInit(): void {
    this.pokemonsData$ = this.dataService.getPokemons();
    this.pokemonsData$.pipe(take(1)).subscribe((response: any) => {
      this.pokemonsArray = response.results;
      this.getPokemonsDetails(this.pokemonsArray);

    }); 
  }

getPokemonsDetails(pokemons: any): void {
    pokemons.map(pokemon => {
      this.dataService.getMoreData(pokemon.name).subscribe(pokemon => {
        console.log(pokemon);
        this.pokemons.push(pokemon);
      });
    })
  }
}