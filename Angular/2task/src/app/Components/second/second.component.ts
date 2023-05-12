import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  interval:any;
  imgIndex =0;
  Images:string[] =[
    "assets/Images/1.jpg",
    "assets/Images/2.jpg",
    "assets/Images/3.jpg",
    "assets/Images/4.jpg",
    "assets/Images/5.jpg",
    "assets/Images/6.jpg",
  ]
  imgSrc=this.Images[0];

  nextPhoto(){
    console.log(this.imgIndex);

    if(this.imgIndex<this.Images.length-1){
      this.imgIndex++;
      //console.log(this.imgIndex);
      this.imgSrc = this.Images[this.imgIndex];
    }
  }

  previousPhoto(){
    if(this.imgIndex>0){
      this.imgIndex--;
      //console.log(this.imgIndex);
      this.imgSrc = this.Images[this.imgIndex];
    }
  }

  slideShow(){
    this.interval = setInterval(()=>{
      this.nextPhoto();
      if(this.imgIndex == this.Images.length-1){
        this.imgIndex=-1;
      }
    },1000)
  }

  stopShow(){
    clearInterval(this.interval);
  }
}
