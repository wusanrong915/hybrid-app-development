import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  txt:string;
  @Output() eventinput=new EventEmitter();
  
  fun(e){
    if(e.keyCode==13){
      this.eventinput.emit(new Msg(this.txt,false));
      this.txt="";
    }
  };
}
export class Msg{
  constructor(public title:string,public done:boolean){

  }

}
