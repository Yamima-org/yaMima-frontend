import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    let element: any = $event.target;
    if (element.scrollingElement.scrollTop === 0) {
      this.isInScroll = false;
    } else {
      this.isInScroll = true;
    }
  }
  isInScroll: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
