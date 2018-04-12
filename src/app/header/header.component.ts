import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { trigger, state, style, transition, animate, query, animateChild, stagger } from '@angular/animations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('NavViz', [
      transition('hide => show', [
        style({ transform : 'translateY(-10%)' }),
        animate(50, style({ transform : 'translateY(0%)' })),
        query('@linkViz', stagger(100, [ 
          animateChild()
        ]))
      ])
    ]),
    trigger('linkViz', [
      transition('hide => show', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ])
  ]
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

  showNav(){
    return this.hidenave ? 'hide' : 'show';    
  }

}
