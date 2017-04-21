import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}

  tiles = [
    {text: 'One', cols: 3, rows: 1, background: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, background: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, background: 'pink'},
    {text: 'Four', cols: 2, rows: 1, background: '#DDBDF1'},
  ];
}
