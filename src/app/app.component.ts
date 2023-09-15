import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-2';
  courses = [1,2];
  Players =[3,4];
  fruits=['apple'];
  items=["table","chair","book"];
  basket=["chips","juice"];
  message:string="Hello Sec-B!!"
  inputValue:string="Initial value";
}



