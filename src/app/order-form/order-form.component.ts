import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  oldPrice : number = 9000;
  newPrice : number = 4500;

  constructor() {}

  ngOnInit(): void {
  }

}
