import { Component, OnInit, AfterViewInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-contract-digitization',
  templateUrl: './contract-digitization.component.html',
  styleUrls: ['./contract-digitization.component.css']
})
export class ContractDigitizationComponent implements OnInit,AfterViewInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
 }  

}
