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
  foodArray = [
      {
        id:1,
        img:"../../assets/gulab.jpg",
        amt:100,
        qty:1
      },
      {
        id:2,
        img:"../../assets/dosa.jpg",
        amt:200,
        qty:1
      },
      {
        id:3,
        img:"../../assets/noodles.jpg",
        amt:250,
        qty:1
      },
      {
        id:4,
        img:"../../assets/pav-bhaji.jpg",
        amt:150,
        qty:1
      },
      {
        id:5,
        img:"../../assets/khadvi.jpg",
        amt:110,
        qty:1
      },
  ];
 
  add(f:any){
    //console.log(f.qty);
    if(f.qty!=10){
    f.qty = f.qty + 1;
    }
  }
  minus(f:any){
    if(f.qty !=1){
    f.qty = f.qty - 1;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
