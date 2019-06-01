import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Paula Ramirez';
  following = 5001;
  followers = 10002;

  strengths = [{ text: 'English', level: 'Basic' }, { text: 'HTML', level: 'High' }, { text: 'Testing', level: 'Low'}, {text:'Email',  level:'xxxxxx@ggg.com'}];

  people = [
    {
      "name": "Vanessa M.",
      "age": 16,
      "color": 'red'
    },
    {
      "name": "Carlos Angulo",
      "age": 25,
      "color": 'green'
    },
    {
      "name": "Maleja",
      "age": 21,
      "color": 'pink'
    }
  ];

}
