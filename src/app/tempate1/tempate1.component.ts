import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempate1',
  templateUrl: './tempate1.component.html',
  styleUrls: ['./tempate1.component.css']
})
export class Tempate1Component implements OnInit {

  login:any;

  onSubmitForm(frm:any){
    console.log(frm.value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
