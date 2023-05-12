import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  name="";
  age="";
  
  @Output() ev = new EventEmitter();
  
  //studentObj = {stuName: "", stuAge: ""};
  
  sendDataToParent(){
    //this.studentObj.stuName = this.name;
    //this.studentObj.stuAge = this.age;

    //console.log(this.studentObj);
    console.log("//////////////");
    this.ev.emit({stuName: this.name, stuAge: this.age});

    this.name ="";
    this.age ="";

  }
}
