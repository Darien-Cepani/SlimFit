import { Component, OnInit, AfterViewInit, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  @ViewChild('script') script!: ElementRef;
  src: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  convertToScript() {
      console.log(this);
      const element = this.script.nativeElement;
      const parent = element.parentElement;
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'assets/bitrix.js';
      script.setAttribute('data-b24-form', 'nline/6/lf913i');
      script.setAttribute('data-skip-moving', 'true');
      console.log('Karinpidh');
      console.log(script);

      if (element.innerHTML) {
          script.innerHTML = element.innerHTML;
      }

      parent.parentElement.replaceChild(script, parent);
  }

  ngAfterViewInit() {
      if (isPlatformBrowser(this.platformId)) {
          this.convertToScript();
      }
  }

  ngOnInit(): void {
  }

}
