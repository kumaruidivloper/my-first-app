import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    employee = [
      {name}
    ];
    model:any ={};

  AddName(){
    this.employee.push(this.model);
    this.model={};
  }
}
