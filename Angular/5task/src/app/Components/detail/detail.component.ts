import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  ID:any;
  Student:any;

  constructor(myActivatedRoute: ActivatedRoute, private mySer: StudentsService){
    this.ID = myActivatedRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.mySer.getStudentById(this.ID).subscribe({
      next:(data)=>{
        this.Student = data;
      },
      error:(err)=>{console.log(err)}
    })
  }
}
