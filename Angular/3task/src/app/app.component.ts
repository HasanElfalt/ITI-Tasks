import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task';
  Students: any[] = [];

  getData(data:any){
    console.log(data);
    if(data.stuAge<50 && data.stuAge>=0)
      this.Students.push(data); 
    
      console.log(this.Students);
  }
}
