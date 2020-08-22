import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  numbers  ;


  skills = [] ;

  str ;

  back = "url(assets/stack/rct.jpg)" ;



  init(){
    this.skills = [
      { b1 :  this.str +"rct.jpg)"} ,
      { b1 :  this.str+"ang.jpg)"} ,
      { b1 :  this.str+"redux.jpg)"} ,
      { b1 :  this.str+"node.jpg)"} ,

      { b1 :  this.str+"java.png)"},
      { b1 :  this.str+"c.png)"},
      { b1 :  this.str+"python.jpg)"},

      { b1 :  this.str+"django.jpg)"},
      { b1 :  this.str+"js.jpg)"} ,
      { b1 :  this.str+"css.jpg)"},

      { b1 :  this.str+"html.jpg)"},
      { b1 :  this.str+"android.png)"},
      { b1 :  this.str + "numpy.png)"},
      { b1 :  this.str + "keras.jpg)"},
      { b1 :  this.str + "sklearn.jpg)"},

    ] ;
  }



  constructor() {
    this.numbers = Array(2).fill(0).map((x,i)=>i);
    this.str = "url(assets/stack/" ;
    this.init() ;

  }



  getBack(index){
      return this.skills[index].b1;
  }


  ngOnInit(): void {

  }

}
