import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  count = 0;
  box1 = 'box1';
  box2 = 'box2';
  box3 = 'box3';
  box4 = 'box4';
  box5 = 'box5';
 
  add(){
    
    this.count++;
  }
  minus(){
    this.count--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
