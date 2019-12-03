import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-wars-ripoff',
  templateUrl: './star-wars-ripoff.component.html',
  styleUrls: ['./star-wars-ripoff.component.scss']
})
export class StarWarsRipoffComponent implements OnInit {

  buttonClicked: boolean = false;
  constructor() { }

  ngOnInit() {
    
  }

  startShow(){
    this.buttonClicked = true;
  }
  
}
