import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stu',
  templateUrl: './stu.component.html',
  styleUrls: ['./stu.component.css']
})
export class StuComponent {
  @Input() StudentsArr:any[]=[];
}
