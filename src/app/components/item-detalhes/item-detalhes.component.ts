import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detalhes',
  templateUrl: './item-detalhes.component.html',
  styleUrls: ['./item-detalhes.component.scss']
})
export class ItemDetalhesComponent implements OnInit {
  

  constructor(private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    
  }

}
