import { Component, OnInit ,AfterViewInit,ElementRef} from '@angular/core';

@Component({
  selector: 'app-loyalty-solution',
  templateUrl: './loyalty-solution.component.html',
  styleUrls: ['./loyalty-solution.component.css']
})
export class LoyaltySolutionComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
 }  

}
