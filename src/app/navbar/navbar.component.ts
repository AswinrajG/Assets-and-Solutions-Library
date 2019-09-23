import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  btnStyleGroup1: string[];
  btnStyleGroup2: string[];
  key1: string = 'INDUSTRIES'
  key2: string = 'BUSINESS FUNCTIONS'

  constructor() {
    
   }
  
  ngOnInit() {
    localStorage.clear();
  }

 
}
