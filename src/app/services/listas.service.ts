import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  getToDoItens: any[] = ['To do first item', 'to do second item', 'to do third item'];

  getDoingItems: any[] = ['doing first item', 'doing second item', 'doing third item'];

  getDoneItems: any[] = ['done first item', 'done second item', 'done third item'];

  delete(i, list) {
    list.splice(i, 1)
  }


  constructor() { }
}
