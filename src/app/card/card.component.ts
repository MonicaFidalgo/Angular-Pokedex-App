import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title:string;
  @Input() source: string;
  @Input() description: string;

  @Input() addAction: any;

  constructor() { }

  ngOnInit(): void {
  }

}
