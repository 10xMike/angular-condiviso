import { Component, OnInit } from '@angular/core';
import { IngredientiService } from '../ingredienti.service';
import { Ingrediente } from '../models/ingrediente';


@Component({
  selector: 'app-panino',
  templateUrl: './panino.component.html',
  styleUrls: ['./panino.component.css']
})
export class PaninoComponent implements OnInit {
elencoIngredienti: Ingrediente[];
panino=[];
display: string = ' ';
  constructor(private is: IngredientiService) {
    this.elencoIngredienti=[];
   }

  ngOnInit(): void {
    this.elencoIngredienti= this.is.getElement();
  }
aggiungi(nome:any, prezzo:any):void{
    this.elencoIngredienti.push(nome, prezzo)
      
}
}
