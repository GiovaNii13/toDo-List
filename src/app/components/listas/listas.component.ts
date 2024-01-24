import { Component, OnInit } from '@angular/core';
import { ListasService } from 'src/app/services/listas.service';

import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {
  @ViewChild('inputText') newTaskInput: ElementRef;

  addOn: boolean = true;

  inputOn: boolean = false;

  errorOn: boolean = false;

  toDoItems: any[] = [];

  doingItems: any[] = [];

  doneItems: any[] = [];
  

  constructor(private listasService: ListasService) { }

  ngOnInit(): void {
    this.toDoItems = this.listasService.getToDoItens;

    this.doingItems = this.listasService.getDoingItems;

    this.doneItems = this.listasService.getDoneItems;
  }

  turnInputOn() {
    this.inputOn = !this.inputOn;
    this.addOn = !this.addOn
    setTimeout(() => {
      this.newTaskInput.nativeElement.focus();
    }, 0)
  }

  addTheList(valor) {
    if (valor == '') {
      this.errorOn = !this.errorOn;
    } else {
      this.toDoItems.push(valor);
      this.inputOn = !this.inputOn;
      this.addOn = !this.addOn;
    }
  }

  cancelInput() {
    if (this.errorOn) {
      this.errorOn = !this.errorOn
    }
    this.inputOn = !this.inputOn;
    this.addOn = !this.addOn;
  }

  deleteItem(i, list) {
    return this.listasService.delete(i, list);  
  }

  addInDoing(item, newList) {
  }



}
