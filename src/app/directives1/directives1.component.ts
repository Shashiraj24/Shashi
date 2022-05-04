import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directives1',
  templateUrl: './directives1.component.html',
  styleUrls: ['./directives1.component.css']
})
export class Directives1Component implements OnInit {

  public product:any;
 target:boolean=false;
 target1:any;
 age:number=20;
 target2:any={'color':'yellow'};

 public City ="Solapur";

 

color1= "Red"
 constructor() { }


  ngOnInit(): void {

    if(this.age>15){
      this.target1=" value3";
    }else{
      this.target1= "value2";
    }

    

    this.product = [
      {
        id:1 , name:'watch' , price: '10000' , color: 'Black' , image:'https://i.ebayimg.com/images/g/fckAAOSwxlxcmilG/s-l500.jpg',
      
      },
      {
        id:2 , name:'mobile' , price: '20000' , color: 'red' , image: 'https://www.lavamobiles.com/images/card-smartphones.jpg'
      },
      {
        id:3 , name:'tv' , price: '25000' , color: 'Black' , image: 'https://images.philips.com/is/image/PhilipsConsumer/50PUT6604_94-IMS-en_IN?$jpglarge$&wid=960'
      }
    ]
   
  
}



 
ColorChange(){
  this.color1 = "green";
  }
  
chnge(){
this.color1 = "Blue";

}

}