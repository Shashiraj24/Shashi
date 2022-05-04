import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe1',
  templateUrl: './pipe1.component.html',
  styleUrls: ['./pipe1.component.css']
})
export class Pipe1Component implements OnInit {

  constructor() { }

  test: string= "Pipe method of angular";
  Student={
    fname:'abc',
    lname:'xyz',
    age:27
  };

  ngOnInit(): void {
  }

  date = new Date();
   salary = 20000;
}
