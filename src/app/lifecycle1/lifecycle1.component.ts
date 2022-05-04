import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle1',
  templateUrl: './lifecycle1.component.html',
  styleUrls: ['./lifecycle1.component.css']
})
export class Lifecycle1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
