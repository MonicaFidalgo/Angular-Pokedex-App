import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(
    private http: HttpClient
  ) { 
    console.log("creating DataService")
  }

  //get Pokemons Method
  getPokemons(): Observable<any> {
    return this.http.get(this.baseUrl); 
  }

  getMoreData(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${name}`)
  }
}


