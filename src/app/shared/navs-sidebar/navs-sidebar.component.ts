import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navs-sidebar',
  templateUrl: './navs-sidebar.component.html',
  styleUrls: ['./navs-sidebar.component.scss']
})
export class NavsSidebarComponent implements OnInit {

  scrollActive: boolean;
  constructor() {

  }

  ngOnInit() {
  }

  @HostListener('window:scroll')
    checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= 100 ) {
      this.scrollActive = true;
    } else {
      this.scrollActive = false;
    }
  }
}
