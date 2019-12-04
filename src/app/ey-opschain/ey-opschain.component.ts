import { Component, OnInit ,AfterViewInit,ElementRef} from '@angular/core';

@Component({
  selector: 'app-ey-opschain',
  templateUrl: './ey-opschain.component.html',
  styleUrls: ['./ey-opschain.component.css']
})
export class EyOpschainComponent implements OnInit,AfterViewInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
 }  

}
