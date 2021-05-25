import { Component } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { NewserviceService } from './newservice.service';/*Imported Service From newservice .ts File */
import {  Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewserviceService]
})
export class AppComponent {
  
  // title = '';

  // chk = true;
  // isvalid: boolean = true;
  // btnclick() {
  //   alert("You have click the button");
  // }
  // changevalue(valid: boolean) {
  //   this.isvalid = valid;
  // }
  // emp:any[];
  // text='';
  // constructor(private _newservice: NewserviceService) { } /*Create Constructor class of new service */

  // ngOnInit() 
  // {
  //   this.emp=this._newservice.employee;
  //   this.text=this._newservice.display(); /* Calling The function which defined in new service class */
  // }
  // title1 = 'List Of Friends';

  // friends = ['Divlo','Dhavlo','Parthyo','Paso','ShyamBHAI','Akshit'];
  // myfriend = this.friends;


  // heroes = [
  //   new Hero(1, 'Windstorm'),
  //   new Hero(13, 'Bombasto'),
  //   new Hero(15, 'Magneta'),
  //   new Hero(20, 'Tornado'),
  //   new Hero(1, 'Windstorm'),
  //   new Hero(13, 'Bombasto'),
  //   new Hero(15, 'Magneta'),
    
  // ];
  // myHero2 = this.heroes[0];



  // // one way data binding through Interpolation
  // StudentName ='Alok Mishra';
  // StudentNo = 91;

  // // one way data binding through property
  // SelfName = 'Vivek Purohit';

  // // one way data binding through property
  // colspn = 3;
  // bdr = 5;
  // h =200;
  // w = 300;

  // // one way data binding through event(view to component-source)
  // OnClick(): void{
  //   alert('you pressed me');
  // }

  // // two way data binding through [(ngModel)](view to source to view)
  // fname:string='vivek';
  // lname:string='purohit';


  // // inbuilt pipes 
  // todate : Date = new Date();
  // players : any[]=[
  //   { name:'hardik',team:'mumbai',code:10,runs:281,sixes:25},
  //   { name:'rohit',team:'mumbai',code:9,runs:332,sixes:200},
  //   { name:'kunal',team:'mumbai',code:10,runs:109,sixes:5},
  //   { name:'msd',team:'csk',code:1,runs:200,sixes:7},
  //   { name:'jadeja',team:'csk',code:9,runs:232,sixes:11}]

  //   // UpperCasePipe & LowerCasePipe
  //   txt1: string= "Angular pipes Example";
  //   txt2: string= "Welcome to Angular";

  //   // DecimalPipe / NumberPipe
  //   num: number= 9542.14554;

  //   // PercentPipe
  //   per: number= .7414;

  //   // CurrencyPipe
  //   cur: number= 175;

  //   // Custome Pipe
  //   students:any=[
  //     {RNo:'91',Name:'Avi',Std:'8th',gender:'male'},
  //     {RNo:'92',Name:'Vaani',Std:'6th',gender:'female'},
  //     {RNo:'93',Name:'Prayag',Std:'12th',gender:'male'}
  //   ];

  //   celcius: number;
  //   Fahrenheit: number; 


  
  title = 'Angular Router Tutorial';

    
}


