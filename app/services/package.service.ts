import { Injectable } from '@angular/core';

@Injectable()
export class PackageService {

  constructor() { }
  set(key,value){
    localStorage.setItem(key,value);
  }
  get(key){
    return localStorage.getItem(key);
  }

}
