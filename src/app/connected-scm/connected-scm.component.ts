import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-connected-scm',
  templateUrl: './connected-scm.component.html',
  styleUrls: ['./connected-scm.component.css']
})
export class ConnectedScmComponent implements OnInit ,AfterViewInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() { 
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
 }  

}
