import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent{

  constructor(private mySer:StudentsService, private route: Router){

  }

  add(name:any, age:any, email:any, phone:any, courses:any){
    courses = courses.split(',');
    let Student={name, age, email, phone, courses}

    this.mySer.addNewStudent(Student).subscribe({
      next:(data)=>{
        this.route.navigate(['../'])
      },
      error:(err)=>{console.error(err)}

    })
  }

}
