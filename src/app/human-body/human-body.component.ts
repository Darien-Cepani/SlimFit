import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-human-body',
  templateUrl: './human-body.component.html',
  styleUrls: ['./human-body.component.scss'],
})
export class HumanBodyComponent implements OnInit {
  public face = false;
  public upper = false;
  public lower = false;
  public arms = false;
  public legs = false;
  constructor() { }

  ngOnInit(): void {
  }

}
