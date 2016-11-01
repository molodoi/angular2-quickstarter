import { Component, Input } from '@angular/core';
import { Item as ItemModel } from './models/item';


@Component({
  selector: 'item',
  templateUrl:'app/item.component.html'
})
export class Item{
    @Input() item: ItemModel;
}