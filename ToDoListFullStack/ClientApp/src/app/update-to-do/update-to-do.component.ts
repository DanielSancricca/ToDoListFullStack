import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ToDoList } from '../ToDo';

@Component({
  selector: 'app-update-to-do',
  templateUrl: './update-to-do.component.html',
  styleUrls: ['./update-to-do.component.css']
})
export class UpdateToDoComponent implements OnInit {

  id:number=0;
  toDo: ToDoList=new ToDoList(0,"",false);
  constructor(private toDoService:ToDoService) { }

  ngOnInit(): void {
  }

  lookUpToDo(){
    this.toDoService.getToDoById(this.id).subscribe(
      (toDoToUpdate)=>{this.toDo=toDoToUpdate}
    )
  }

  UpdateToDo(){
    this.toDoService.updateToDo(this.id, this.toDo).subscribe(
      (result)=>{console.log(result)}
    )
  }

}
