import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css']
})
export class ThirdCompComponent implements OnInit {

  funstr:string;

  constructor() {
    this.funstr="Inside fun";
   }

  ngOnInit() {
  }
  fun():string
  {
    return this.funstr;
  }

  buttonclick():void
  {
    document.getElementById('strchange').innerHTML="Button Clicked!!";
  }



}
