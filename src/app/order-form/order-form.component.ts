import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  oldPrice : number = 9000;
  newPrice : number = 4500;
  currTime: number = -1;
  timerCookieName: string = "firstAccessTime";

  constructor( private cookieService: CookieService ) {

    if(!cookieService.check(this.timerCookieName)){
      var time = new Date();
      var hours = time.getHours()*3600;
      var minutes = time.getMinutes()*60;
      var seconds = time.getSeconds();
      this.currTime = hours + minutes + seconds;

      this.cookieService.set( this.timerCookieName, this.currTime.toString() );
    } else{
      let timerCookieValue = this.cookieService.get(this.timerCookieName);
      if(timerCookieValue != undefined){
        this.currTime = parseInt(timerCookieValue);
      }
    }
  }

  ngOnInit(): void {
  }

}
