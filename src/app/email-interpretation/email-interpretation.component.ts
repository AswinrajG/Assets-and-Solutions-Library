import { Component, OnInit, AfterViewInit ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-email-interpretation',
  templateUrl: './email-interpretation.component.html',
  styleUrls: ['./email-interpretation.component.css']
})
export class EmailInterpretationComponent implements OnInit,AfterViewInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
 }  

}
