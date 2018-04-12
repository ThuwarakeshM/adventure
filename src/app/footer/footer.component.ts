import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query, animateChild, stagger } from '@angular/animations'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  today = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
