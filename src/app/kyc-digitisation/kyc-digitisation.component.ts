import { Component, OnInit,AfterViewInit,ElementRef,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-kyc-digitisation',
  templateUrl: './kyc-digitisation.component.html',
  styleUrls: ['./kyc-digitisation.component.css']
})
export class KycDigitisationComponent implements OnInit,AfterViewInit {

  constructor(@Inject(DOCUMENT) private document: Document ,private elementRef: ElementRef) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(){
    // this.document.body.scrollTop = 0;
    //  this.elementRef.nativeElement.ownerDocument.body.scrollTop = 0
    this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
    
 }  

}
