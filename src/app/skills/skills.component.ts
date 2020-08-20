import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  numbers  ;
  constructor() {
    this.numbers = Array(12).fill(0).map((x,i)=>i);
  }

  ngOnInit(): void {
  }

}
