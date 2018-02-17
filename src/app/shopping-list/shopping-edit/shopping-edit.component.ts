import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameElement:ElementRef;
  @ViewChild('amountInput') amountElement:ElementRef;
  @Input() ingredient:Ingredient = new Ingredient('', 0);
  @Output('item-added') itemAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(event) {
    //event.preventDefault();
    this.ingredient.name = this.nameElement.nativeElement.value;
    this.ingredient.amount = this.amountElement.nativeElement.value;
    this.itemAdded.emit(this.ingredient);
    this.onClear();
  }

  onClear() {
    this.nameElement.nativeElement.value = '';
    this.amountElement.nativeElement.value = 0;
    this.ingredient = new Ingredient('', 0);
  }
}
