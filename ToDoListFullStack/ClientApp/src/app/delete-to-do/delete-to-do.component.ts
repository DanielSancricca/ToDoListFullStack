import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-delete-to-do',
  templateUrl: './delete-to-do.component.html',
  styleUrls: ['./delete-to-do.component.css']
})
export class DeleteToDoComponent implements OnInit {

  id: number = 0;
  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
  }

  DeleteToDo(){
    this.toDoService.deleteToDo(this.id).subscribe(
      (result)=>{console.log(result)}
    )
  }

}
