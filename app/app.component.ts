import { Component } from '@angular/core';
import { Item } from './models/item';

import { Config } from './config';

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
  //styles: ['.state-0 { color:red; }','.state-1 { color:orange; }','.state-2 { color:green; }']
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  private title: string;
  private version: string;
  private collection: [Item];
  private newItem: Item;

  constructor(){
    this.title = Config.APP_TITLE;
    this.version = Config.APP_VERSION;
    this.collection = [
      new Item({reference: '1234', name: 'Thomas', state: 0}),
      new Item({reference: '3456', name: 'Gabby', state: 1}),
      new Item({reference: '5678', name: 'Elise', state: 2})
    ];
    this.resetNewItem();  
  }

  getDetails(event: Event, param){
    event.preventDefault();
    let element = event.target || event.srcElement || event.currentTarget;
    console.log(param);
  }

  creatObject(){
    this.collection.push(this.newItem);
    this.resetNewItem();   
  }

  resetNewItem(){    
    this.newItem = new Item({reference: '', name: '', state: 0});

  }
}