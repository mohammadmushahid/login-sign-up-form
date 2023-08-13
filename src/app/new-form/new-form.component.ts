
import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
export interface PeriodicElement {
 name: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Becker LLC', symbol: '0'},
  {name: 'Bruen PLC',  symbol: '0', },
  {name: 'D Amore,Mills and bode', symbol: '0', },
  {name: 'Gislason-Blanda',  symbol: '0', },
  {name: 'Hagenes Ltd', symbol: '0', },
  {name: 'Kemmer-Hoeger', symbol: '0', },
  {name: 'Kunde Group', symbol: '0', },
  {name: 'Paucek-Barrows', symbol: '0', },
  {name: 'Price-Bergstrom', symbol: '0', },
  {name: 'Toy and Sons', symbol: '0'},
  {name: 'Zemlak, Roob and Daugherty', symbol: '0', },
  {name: 'Zieme-Halvorson', symbol: '0', },
  
];


@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent  {
  displayedColumns: string[] = ['name',  'symbol', 'menu'];
  dataSource = [...ELEMENT_DATA];

  someFunction(data: any) {
    console.log(data);
  }
}






















 









  


