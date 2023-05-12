import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private Ser: StudentsService, private route:Router){

  }

  Students:any;

  ngOnInit(): void {

    this.Ser.getAllStudents().subscribe({

      next:(data)=>{ this.Students = data },
      error:(err)=>{console.log(err)}
    })
  }

  deleteItem(id:any){
    if(confirm("Are you sure to delete with id "+id)){
      this.Ser.deleteStudentById(id).subscribe({
        next:(data)=>{
          this.ngOnInit();
        },
        error:(err)=>{console.log(err)}
      })
    }
  }
}
