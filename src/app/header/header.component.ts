import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  oldPrice : number = 9000;
  newPrice : number = 4500;
  currTime: number = -1;
  timerCookieName: string = "firstAccessTime";


  constructor( private cookieService: CookieService ) {
    var time = new Date();
    var hours = time.getHours()*3600;
    var minutes = time.getMinutes()*60;
    var seconds = time.getSeconds();
    var timeNow = hours + minutes + seconds;

    if(!cookieService.check(this.timerCookieName)){
      this.currTime = timeNow;

      this.cookieService.set( this.timerCookieName, this.currTime.toString() );
    } else{
      let timerCookieValue = this.cookieService.get(this.timerCookieName);
      if(timerCookieValue != undefined){
        var cookieTime = parseInt(timerCookieValue);
        this.currTime = cookieTime + (timeNow - cookieTime);
      }
    }
  }
  ngOnInit(): void {
  }

}
