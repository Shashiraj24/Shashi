import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive1',
  templateUrl: './reactive1.component.html',
  styleUrls: ['./reactive1.component.css']
})
export class Reactive1Component implements OnInit {
public isSubmitted:boolean=false;
public SignIn:any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.SignIn=this.fb.group({
      fname:['' ,[Validators.required]],
      lname:['',[Validators.required]],
      email:['',[Validators.required,Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password:['',[Validators.required]]
  

      })
  }
get f(){
  return this.SignIn.controls;
}

Submit(){
 console.log(this.SignIn);
 console.log(this.SignIn.value)


  this.isSubmitted=true;
}

}
