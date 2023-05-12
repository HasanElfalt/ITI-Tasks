import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentsService{

  constructor(private readonly client:HttpClient, private router:Router) {

  }


  private readonly  Url = "http://localhost:3000/Students";

  getAllStudents(){
    return this.client.get(this.Url);
  }

  getStudentById(id:any){
    return this.client.get(this.Url+'/'+id);
  }

  addNewStudent(student : any){
    return this.client.post(this.Url, student);
  }

  updateStudentById(id:any, Student:any){
    return this.client.put(this.Url+'/'+id, Student);
  }

  deleteStudentById(id:any){
    return this.client.delete(this.Url+'/'+id);
  }
}
