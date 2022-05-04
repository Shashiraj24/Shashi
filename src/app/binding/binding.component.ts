import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public Fname:string="";
  public FullName:string="";
  // imageurl:string="";
  data:string="";
  public link:any;
  constructor() { }

  ngOnInit(): void {
    this.data="Example of data binding";

     this.link="https://www.youtube.com/";

     this.Fname="";

     this.FullName="";

    // this.imageurl="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fbeautiful-water-drop-on-dandelion-260nw-789676552.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fimage&tbnid=t162Dq_dpDgLtM&vet=12ahUKEwjMrdPd5vn2AhX3LrcAHVxsDxEQMyhOegUIARCbAQ..i&docid=QooZsUX3wOLfLM&w=416&h=280&q=images&ved=2ahUKEwjMrdPd5vn2AhX3LrcAHVxsDxEQMyhOegUIARCbAQ";
  }

  onclick(){
    console.log(" Welcome To Event Binding!!!" );
  }

}
