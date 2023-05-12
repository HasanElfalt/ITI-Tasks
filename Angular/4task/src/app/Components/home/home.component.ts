import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formValidation = new FormGroup({
    name:new FormControl("", [Validators.required, Validators.minLength(4)]),
    age: new FormControl(0, [Validators.required, Validators.min(20), Validators.max(40)]),
    email: new FormControl("", Validators.email)
  })

  get NameValid(){
    return this.formValidation.controls["name"].valid;
  };

  get AgeValid(){
    return this.formValidation.controls["age"].valid;
  };

  get EmailValid(){
    return this.formValidation.controls["email"].valid && this.formValidation.controls["email"].value != "";
  };

  getValue(){
    if(this.formValidation.controls["name"].valid &&
    this.formValidation.controls["age"].valid &&
    this.formValidation.controls["email"].valid &&
    this.formValidation.controls["email"].value != ""){
      alert("the data is valid");
    }else{
      alert("the data is not valid");
    }
    console.log(this.formValidation);
    console.log(this.formValidation.controls["name"].valid);
    console.log(this.formValidation.controls["age"].valid);
    console.log(this.formValidation.controls["email"].valid);
  }
}
