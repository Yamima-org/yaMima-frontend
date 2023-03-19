import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTiktok = faTiktok;


  constructor() { }

  ngOnInit(): void {
  }

}
