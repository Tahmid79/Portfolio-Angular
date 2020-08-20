import {Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  numbers ;

  @Input() title="" ;


  @ViewChild('gallery') gallery : ElementRef ;

  constructor() {
    this.numbers = Array(10).fill(0).map((x,i) => i) ;
  }

  scrollLeft(){
      this.gallery.nativeElement.scrollTo({ left : (   this.gallery.nativeElement.scrollLeft - 750) , behavior : 'smooth' }) ;
  }

  scrollRight(){
    this.gallery.nativeElement.scrollTo({ left : (   this.gallery.nativeElement.scrollLeft + 750) , behavior : 'smooth' }) ;
  }

  ngOnInit(): void {
  }

}
