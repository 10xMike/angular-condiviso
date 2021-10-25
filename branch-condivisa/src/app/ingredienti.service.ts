import { Injectable } from '@angular/core';
import { ingredienti } from './data/ingredienti';

@Injectable({
  providedIn: 'root'
})
export class IngredientiService {

  constructor() { }
  getElement(){
    return ingredienti
  }
}
