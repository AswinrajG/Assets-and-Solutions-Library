import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-asset-tracking',
  templateUrl: './asset-tracking.component.html',
  styleUrls: ['./asset-tracking.component.css']
})
export class AssetTrackingComponent implements OnInit,AfterViewInit {

  constructor(private elementRef:ElementRef) { }


  ngOnInit() { 
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
 } 

}
