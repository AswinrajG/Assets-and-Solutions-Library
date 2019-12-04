import { Component, OnInit,AfterViewInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-invoice-digitization',
  templateUrl: './invoice-digitization.component.html',
  styleUrls: ['./invoice-digitization.component.css']
})
export class InvoiceDigitizationComponent implements OnInit,AfterViewInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
 }  

}
