import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() industries: string;
  @Input() sectors : string;
  @Input() capabilities : string;
  @Input() functions : string;
  
  constructor() { }
  public title = "Home"
  ngOnInit() {
  }

}
