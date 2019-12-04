import { Component, OnInit ,AfterViewInit,ElementRef} from '@angular/core';

@Component({
  selector: 'app-ssi-digitization',
  templateUrl: './ssi-digitization.component.html',
  styleUrls: ['./ssi-digitization.component.css']
})
export class SsiDigitizationComponent implements OnInit ,AfterViewInit{

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
 }  

}
