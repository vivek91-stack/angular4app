import { Injectable } from '@angular/core';

@Injectable()
export class NewserviceService {

  employee: any[];
  constructor() {
    this.employee = [
      {
      empcode: '194',empname: 'Vivek'
      },
      {
        empcode: '195',empname: 'Vishal'
      }
    ]
  }
  display() {
    return 'Hello vivek here';
  }



}
