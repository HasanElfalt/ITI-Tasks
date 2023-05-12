import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  Id:any;
  Student:any;
  inputs:any;

  constructor(activeRoute: ActivatedRoute, private mySer:StudentsService,private el: ElementRef,private router:Router){
    this.Id = activeRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.mySer.getStudentById(this.Id).subscribe({
      next:(data)=>{this.Student = data},
      error:(err)=>{console.error(err)}

    })


  }

  Update(name:any, age:any, email:any, phone:any){
    this.inputs = this.el.nativeElement.getElementsByTagName("div")[6].children;
    //console.log(this.inputs);

    let courses = [];
    for(let input of this.inputs){
      courses.push(input.value);
    }
    //console.log(courses);

    let s = {name, age, email, phone, courses};

    this.mySer.updateStudentById(this.Id, s).subscribe({
      next:(data)=>{
        this.router.navigate(['../']);
      },
      error:(err)=>{console.error(err)}
    });

  }

}
