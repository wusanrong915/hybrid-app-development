import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../services/package.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  counter:number=0;
  data = [];
  
  gettxt(msg){
    this.data.push(msg);
    this.count();
    JSON.stringify(this.data)
  }
  count(){
    this.counter=0;
    this.data.forEach((value,index)=>{
      if(value.done){
        this.counter++;
      }
    });
  }
  add1(i:number){
    this.count();
    this.local.set('list', JSON.stringify(this.data));
  }
  del(i){
    this.data.splice(i,1);
    this.count();
    this.local.set('list', JSON.stringify(this.data));
  }

  constructor(private local:PackageService) { }

  ngOnInit() {
    if(this.local.get('list')){
      this.data = JSON.parse(this.local.get('list'));
      this.count();
    }
    else{
      this.data=[];
    }
    
    
  }

}

