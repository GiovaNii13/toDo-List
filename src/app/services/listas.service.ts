import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  getToDoItens: [] = [];

  getDoingItems: any[] = [];

  getDoneItems: any[] = [];

  delete(i, list) {
    list.splice(i, 1);
  }

  constructor() { }
}
