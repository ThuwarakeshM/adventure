import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hidenave = true;

  constructor(public router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event)=>{
      if (event instanceof NavigationStart) {
        this.hidenave = true;
      }
    })
  }

  toggleNav(){
    this.hidenave = this.hidenave ? false : true;
  }

}
