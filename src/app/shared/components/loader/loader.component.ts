import { Component, OnInit } from '@angular/core';
import * as bodymovin from 'lottie-web';

@Component({
  selector: 'rmc-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     const animation = bodymovin.loadAnimation({
      container: document.getElementById('lottie-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/data/loader.json'
    });
  }

}
