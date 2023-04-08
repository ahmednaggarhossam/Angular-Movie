import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  // Types in Typescript
  name:string = "ahmed";
  age:Number = 26;
  y:boolean =true;
  apiResponse:any;

  //Tuble in Typescript
  productName:[string,number] = ["Toshiba",50];

  //Union in Typescript
  product:string|number = 4;
  Product:string|number = 'ahmed';

  //Array in Typescript
  friends:string[] =['ahmed', 'mohamed', 'shady']

  constructor(){}
  
  ngOnInit():void{

    // Function in typescript
    function  hello(user:string):string {
      return user;
    }
  }
}

// Object in typescript
interface Person {
  name: string;
  age: number;
}