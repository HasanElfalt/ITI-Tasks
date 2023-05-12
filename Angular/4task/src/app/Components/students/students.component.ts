import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  Students :{name:string, age:string, email:string}[] = [
    {name: "Hassan",age: "27",email:"hassanelfalt60@gmail.com"},
    {name: "Ahmed Saeed",age: "22",email:"AhmedSaeed@gmail.com"},
    {name: "Hassan Mostafa",age: "21",email:"hassanMostafa@gmail.com"},
    {name: "Mahmoud",age: "25",email:"Mahmoud@gmail.com"},
    {name: "Ahmed kamal",age: "33",email:"AhmedKamal@gmail.com"},
    {name: "Youssef",age: "20",email:"Youssef@gmail.com"},
  ]
}
