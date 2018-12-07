import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'rmc-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
  animations: [
    trigger('rightToLeft', [
      transition('* => visible', [
        // fade out the element immediately
        style({ opacity: 0, transform: 'translateX(100%)' }),
        // now animate it in over one second
        animate(300, style({opacity: 1, transform: 'translateX(0%)' }))
      ])
    ])
  ]
})
export class NewsfeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
