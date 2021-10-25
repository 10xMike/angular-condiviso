import { Component, OnInit } from '@angular/core';
import { IngredientiService } from '../ingredienti.service';
import { Ingrediente } from '../models/ingrediente';


@Component({
  selector: 'app-panino',
  templateUrl: './panino.component.html',
  styleUrls: ['./panino.component.css']
})
export class PaninoComponent implements OnInit {
panino: Ingrediente[];
  constructor(private is: IngredientiService) {
    this.panino=[];
   }

  ngOnInit(): void {
    this.panino= this.is.getElement();
  }

}
