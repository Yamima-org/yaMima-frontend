import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    let element: any = $event.target;
    if (element.scrollingElement.scrollTop > window.innerHeight/2) {
      this.isInScroll = true;
    } else {
      this.isInScroll = false;
    }
  }
  isInScroll: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToCommand(): void {
    this.router.navigate(['/choixProduit']);
  }
}
