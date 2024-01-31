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

  @ViewChild('valueToEdit') newValueToEdit: ElementRef

  addOn: boolean = true;

  inputOn: boolean = false;

  errorOn: boolean = false;

  detalhesOn: boolean = false;

  itemSelecionado: string | null = null;

  toDoItems: any[] = [];

  doingItems: any[] = [];

  doneItems: any[] = [];

  newValueOnInput: string;

  editingIndex: number = -1;

  totalDeTasks: number = 0;

  constructor(private listasService: ListasService) { }

  ngOnInit(): void {
    this.toDoItems = this.listasService.getToDoItens;

    this.doingItems = this.listasService.getDoingItems;

    this.doneItems = this.listasService.getDoneItems;
  }

  turnInputOn() {
    this.inputOn = !this.inputOn;
    this.addOn = !this.addOn;
    setTimeout(() => {
      this.newTaskInput.nativeElement.focus();
    }, 0)
  }

  addTheList(valor) {
    if (valor == '') {
      this.errorOn = true;
    } else {
      this.toDoItems.push(valor);
      this.inputOn = !this.inputOn;
      this.addOn = !this.addOn;
      this.totalDeTasks ++;
      if (this.errorOn) {
        this.errorOn = false;
      }
    }
  }

  cancelInput() {
    if (this.errorOn) {
      this.errorOn = false;
    }
    this.inputOn = !this.inputOn;
    this.addOn = !this.addOn;
  }

  deleteItem(i, list) {
    this.totalDeTasks --;
    return this.listasService.delete(i, list); 
  }

  addInDo(item) {
    const index = this.doingItems.indexOf(item);
    if (index !== -1) {
      this.doingItems.splice(index, 1);
      this.toDoItems.push(item);
    }
  }

  addInDoing(item) {
    const index = this.toDoItems.indexOf(item);
    if (index !== -1) {
      this.toDoItems.splice(index, 1);
      this.doingItems.push(item);
    }
  }

  addInDone(item) {
    const index = this.doingItems.indexOf(item);
    if (index !== -1) {
      this.doingItems.splice(index, 1);
      this.doneItems.push(item);     
    }
  }

  openEditDo(index: number) {
    setTimeout( () => {
      this.newValueToEdit.nativeElement.focus()
    }, 0)
    if (index >= 0 && index < this.toDoItems.length) {
      this.detalhesOn = !this.detalhesOn;
      this.editingIndex = index;
      this.newValueToEdit.nativeElement.value = this.toDoItems[index];

    }
  }

  doEditInput() {
    if (this.editingIndex !== -1) {
      this.toDoItems[this.editingIndex] = this.newValueToEdit.nativeElement.value;
      this.detalhesOn = !this.detalhesOn;
      this.editingIndex = -1;
      this.newValueToEdit.nativeElement.value = '';
    }
  }

  closeEdit() {
    this.detalhesOn = false;
  }

  
}